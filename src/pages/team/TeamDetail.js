import React from "react";
import styled, { css } from "styled-components";
import { Container, Image, Input, Modal } from "../../elements";
import { ApplyList } from "../../components";
import { useMediaQuery } from "react-responsive";
import { history } from "../../redux/configStore";
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as teamActions } from "../../redux/modules/team";
import { actionCreators as applyActions } from "../../redux/modules/apply";
import { actionCreators as userAction } from "../../redux/modules/user";
import { urlCheck } from "../../shared/Common";
import Swal from 'sweetalert2';
import Leader from '../../images/leader.svg';
import '../../css/editor.css';
import moment from "moment";
import DefaultProfile from "../../images/def_profile.svg";

const TeamDetail = (props) => {

  const dispatch = useDispatch();
  const id = props.match.params.teamId;
  const team = useSelector((state) => state.team.teamInfo);
  const user = useSelector((state) => state.user.user);

  //모달
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {

    if (!user) {
      Swal.fire({
        text: '로그인 후 사용해주세요 :)',
        icon: 'warning',
        confirmButtonColor: "#999cda",
      })
      return false;
    }
    if (user?.nowteamcnt !== 0) {
      Swal.fire({
        icon: "warning",
        html: '<p>현재 진행 중인 프로젝트가 있습니다.<br/> 동일 기간 진행 가능한 프로젝트는 1개입니다.</p>',
        confirmButtonColor: "#999cda",
      })
      return false;
    }

    if (user?.applyteamid.some(t => t === Number(id))) {
      Swal.fire({
        icon: "warning",
        text: '이미 지원한 게시글입니다.',
        confirmButtonColor: "#999cda",
      })
      return false;
    }

    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  React.useEffect(() => {
    dispatch(teamActions.getDetailTeamMakingAPI(id));
    dispatch(userAction.loginCheckAPI());
  }, []);


  let recruitBegin = moment(team?.createdAt).format('YYYY.MM.DD');
  let recruitEnd = moment(team?.recruit).format('YYYY.MM.DD');
  let projectBegin = moment(team?.begin).format('YYYY.MM.DD');
  let projectEnd = moment(team?.end).format('YYYY.MM.DD');

  //지원하기
  const [msg, setMsg] = React.useState("");
  const [site, setSite] = React.useState("");

  //지원하기 함수.
  const applyTeam = () => {
    if (msg === "") {

      Swal.fire({
        icon: "warning",
        text: "리더에게 보낼 메세지를 입력해주세요!",
        confirmButtonColor: "#999cda",
      })
      return false;
    }

    if (site === "") {
      Swal.fire({
        icon: "warning",
        text: "포트폴리오 사이트를 입력해주세요!",
        confirmButtonColor: "#999cda",
      })
      return false;
    }

    if (!urlCheck(site)) {
      Swal.fire({
        icon: "warning",
        text: "올바른 사이트 주소를 입력해주세요!",
        confirmButtonColor: "#999cda",
      })
      return false;
    }


    if (msg.length > 99) {
      Swal.fire({
        icon: "warning",
        text: "리더에게 남기는 메세지는 100자 이내로 적어주세요!",
        confirmButtonColor: "#999cda",
      })
      return false;
    }


    dispatch(applyActions.addApplyAPI(id, msg, site));
    closeModal();
    setMsg("");
    setSite("");

  }

  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });

  return (
    <React.Fragment>
      <Container>
        <TitleBox>
          <Title>[프로젝트] {team.title}</Title>
        </TitleBox>
        <ContentBox>
          <LeaderBox>
            <LeaderMent>
              <LeaderIntro>TEAM LEADER</LeaderIntro>
            </LeaderMent>
            <LeaderInnerBox>
              <LeaderContent>
                <ImageBox>
                  <Image shape="circle" size="60" src={team?.leader?.profileImage ? team?.leader?.profileImage : DefaultProfile} />
                  <LeaderIcon src={Leader} />
                </ImageBox>
                <LeaderInfo>
                  {isMobile ? (<React.Fragment>
                    <LeaderInfoText className="nickname">
                      {team?.leader?.nickname}
                    </LeaderInfoText>
                    <LeaderInfoText className="position">
                      <span>
                        {team?.leader?.position}
                      </span>
                    </LeaderInfoText>
                  </React.Fragment>) : (
                    <LeaderInfoTop>
                      <LeaderInfoText className="nickname">
                        {team?.leader?.nickname}
                      </LeaderInfoText>
                      <LeaderInfoText className="position">
                        <span>
                          {team?.leader?.position}
                        </span>
                      </LeaderInfoText>
                    </LeaderInfoTop>)}
                  <LeaderInfoText className='introduce'>
                    {team?.leader?.description}
                  </LeaderInfoText>
                </LeaderInfo>
              </LeaderContent>
            </LeaderInnerBox>
          </LeaderBox>
          <TeamPostBox>
            {team?.leader?.id === user?.id &&
              (<LeaderMenu>
                {team.recruitState !== "FINISHED" && (
                  <LeaderBtn onClick={() => history.push(`/team/edit/${id}`)}>수정</LeaderBtn>
                )}
                <LeaderBtn onClick={() => dispatch(teamActions.deleteTeamMakingAPI(team.teamId))}>삭제</LeaderBtn>
              </LeaderMenu>)}
            <ContentInnerBox>
              <InfoBox>
                <InfoText>
                  <span>모집기간</span> {recruitBegin}-{recruitEnd}
                </InfoText>
                <InfoText>
                  <span>프로젝트 기간</span> {projectBegin}-{projectEnd}
                </InfoText>
                <InfoText>
                  <span>인원</span> {team.front !== 0 && `프론트엔드 ${team.front}명 `}
                  {team.back !== 0 && `백엔드 ${team.back}명 `}
                  {team.designer !== 0 && `디자이너 ${team.designer}명 `}
                  {team.planner !== 0 && `기획자 ${team.planner}명 `}
                </InfoText>
                <InfoText>
                  <span>언어</span> {team.stack}
                </InfoText>
                <InfoText>
                  <span>장소</span> {team.location}
                </InfoText>
              </InfoBox>
              <ProjectCotentsBox dangerouslySetInnerHTML={{ __html: team.contents }} />
            </ContentInnerBox>
          </TeamPostBox>
        </ContentBox>
        <ModalBox>
          {team?.leader?.id !== user?.id || user === null ? (
            team.recruitState === "ACTIVATED" ?
              (<React.Fragment>
                <ModalButton onClick={openModal}>지원하기</ModalButton>
                <Modal open={modalOpen} close={closeModal} header="📢 지원서 보내기" _onClick={applyTeam} clickName="지원신청">
                  <main>
                    <ApplyBox>
                      <Input multiLine label="메세지" placeholder="리더에게 연락처 및 메세지를 남겨주세요(100자 이내)" modal margin="0px 0px 10px 0px" value={msg} _onChange={(e) => { setMsg(e.target.value) }} />
                      <Input label="포트폴리오" placeholder="포트폴리오 참고 사이트를 입력해주세요 :)" padding="10px 10px" modal value={site} _onChange={(e) => { setSite(e.target.value) }} type="url" />
                    </ApplyBox>
                  </main>
                </Modal>
              </React.Fragment>) : (
                <RecruitFinishBtn>모집완료</RecruitFinishBtn>)) : ('')}
        </ModalBox>

        {(team?.leader?.id === user?.id && team?.recruitState === "ACTIVATED") && (
          <ApplyList />
        )}

      </Container>
    </React.Fragment >
  )
}

export default TeamDetail;

const Flex = css`
  display: flex;
  flex-direction: column;
`;

//모집글
const TitleBox = styled.div`
  margin-top:70px;
  padding-left:40px;
  
  @media ${props => props.theme.mobile}{
    padding: 0px 0px 0px 20px;
    
  }
`;

const ContentBox = styled.div`
  width:90%;
  box-sizing: border-box;
  padding: 20px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //gap:7%;
  margin:35px auto 0px auto;
  //align-items: center; //이거빼면 내용,리더박스 위로 정렬.
  
 
  @media ${props => props.theme.mobile}{
    min-height: auto;
    padding:0px;
    margin-bottom: 15px;
    margin-top:0px;
  }
  
`;

const TeamPostBox = styled.div`
  width:100%;
  ${Flex}

  @media ${props => props.theme.tablet}{
    width:100%;
  }
`;

const ContentInnerBox = styled.div`
  background-color: ${props => props.theme.main_gray};
  box-sizing:border-box;
  padding:20px;
   border-radius: 2px;

`;

const LeaderIcon = styled.img`
  position: absolute;
  top:-8px;
  left:25px;
`;

const InfoBox = styled.div`
  width:100%;
  ${Flex}
  box-sizing: border-box;
  gap:10px;
  background-color: #ffffff;
  padding:15px;
`;

const InfoText = styled.p`
  font-size:15px;
  line-height: 1.4em;

  & span{
    background-color:#e5ecf7;
    padding:2px 10px;
    font-size:0.8em;
    border-radius: 15px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.27);
    margin-right: 5px;
    font-weight: 600;
  }

  @media (max-width:420px){
      font-size:12px;
  }

`
const Title = styled.p`
  font-size:21px;
  line-height: 1.4em;
  font-weight: 600;
  padding-left:10px;
  @media ${props => props.theme.mobile}{
    font-size:18px;
    padding-left:10px;
  }

  @media (max-width:420px){
      font-size:16px;
      padding-left:0px;
  }
`;

const ProjectCotentsBox = styled.div`
  box-sizing:border-box;
  padding-top:15px;
  min-height: 150px;
  

  & img{
    max-width:70%;
  }
  & p{
    line-height: 1.3em;
  }
  & h1,h2,h3{
    line-height: 1.5em;
  }
  @media (max-width:420px){
  
    & p,ol,ul{
      font-size:0.9em;
      line-height: 1.3em;
    }
  }
`;


//리더 프로필 
const LeaderBox = styled.div`
  width:60%;
  margin-bottom: 40px;
  @media ${props => props.theme.tablet}{
    
    width:75%;
  }
  @media ${props => props.theme.mobile}{
    width:100%;
    padding-top:20px;
    border:none;
    margin-bottom: 20px;
  }
`;

const LeaderContent = styled.div`
  display: flex;
  gap:20px;
  justify-content: flex-start;
  align-items: center;

   @media ${props => props.theme.mobile}{
    flex-direction:column;
    gap:10px;
  }
`;

const LeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const LeaderInfoText = styled.p`
  font-size:16px;

  &.introduce{
    line-height: 1.4em;
    font-size:0.85em;
    margin-top:10px;
  }

  &.position{
    font-size:0.7em;
  & span{
      background-color: ${props => props.theme.button_purple};
      padding:2px 8px;
      border-radius: 12px;
      color:#ffffff;
      position: relative;
      top:3px;
      left:7px;
    }
  }

  &.nickname{
    font-size:17px;
    font-weight: 600;
    cursor: pointer;
  }

  @media ${props => props.theme.mobile}{
    
    font-size:15px;
    
    &.introduce{
      padding:0px;
      margin-top:20px;
    }
    &.nickname{
    font-size:1em;
    text-align: center;
  }

  &.position{
    font-size:0.8em;
    text-align: center;

    & span{
      background-color: ${props => props.theme.button_purple};
      padding:0px 8px;
      border-radius: 12px;
      color:#ffffff;
      top:5px;
      left:0px;
    }
  }
  }
`;

const ImageBox = styled.div`
  position: relative;
`;
const LeaderInnerBox = styled.div`
  box-sizing: border-box;
  padding:15px 0px 15px 30px;
  border-radius:5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  justify-content: center;

  @media ${props => props.theme.mobile}{
    border:none;
    min-height: auto;
    padding:25px 15px 25px 15px;
  }
  
`;

const LeaderMent = styled.div`
  font-size:1.1em;
  font-weight: 600;
  text-align:center;
  margin-bottom: 15px;

  @media ${props => props.theme.mobile}{
    margin:20px 0px 15px 0px;
  }

`;

const LeaderIntro = styled.span`
  background-color: white;
  font-size:17px;
  padding:0px 10px;
  position: relative;
  z-index:3;
`;

const LeaderInfoTop = styled.div`
  display: flex;

`;

const LeaderMenu = styled.div`
display: flex;
justify-content: flex-end;
width:100%;
gap:7px;
margin:15px 0px;
padding-right: 20px;

@media ${props => props.theme.mobile}{
  padding-right: 10px;
}

`;


const LeaderBtn = styled.button`
  padding:3px 5px;
  outline: none;
  cursor: pointer;
  border: none;
  color:#683fee;
  border-radius: 8px;
  background-color:#ffffff;
  font-weight: 600;

  @media ${props => props.theme.mobile}{
    font-size:0.8em;
  }

`;

//모달
const ModalBox = styled.div`
  width:100%;
  text-align: center;
  margin:30px 0px 50px 0px;

  @media ${props => props.theme.mobile}{
    margin: 40px 0px 50px 0px;
  }
`;

const ApplyBox = styled.div`
  width:95%;
  margin:0px auto;
`;

const RecruitFinishBtn = styled.button`
  border:2px solid #979797;
  background-color: #979797;
  color:#ffffff;
  outline: none;
  border-radius: 12px;
  font-size: 1em;
  padding:5px 16px;

    @media ${props => props.theme.mobile}{
      font-size:0.85em;
    }
`;

const ModalButton = styled.button`
    background-color: #ffffff;
    outline: none;
    border:2px solid #979797;
    border-radius: 12px;
    padding:5px 16px;
    cursor: pointer;
    color:#8166d6;
    font-size:1em;
    font-weight: 600;
    transition: all .3s;

    &:hover{
        color:#ffffff;
        border:2px solid ${(props) => props.theme.button_purple};
        background-color: ${(props) => props.theme.button_purple};
    }

    @media ${props => props.theme.mobile}{
      font-size:0.85em;  
   }
`
