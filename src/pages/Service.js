import React from 'react'
import styled from "styled-components";
import { Container } from "../elements";
import { history } from "../redux/configStore";
import { useMediaQuery } from "react-responsive";
import Team from "../images/team.svg";
import De_icon from "../images/de_icon.svg";
import Planner_icon from "../images/planner_icon.svg";
import Teamwork from "../images/teamwork.svg";
import Project_img01 from "../images/project_img01.png"
import Project_img02 from "../images/project_img02.png"
import Project_img03 from "../images/project_img03.png"

const Service = () => {

  const isTablet = useMediaQuery({
    query: "(min-width:769px) and (max-width:1200px)"
 });

 const isMobile = useMediaQuery({
    query: "(max-width:768px)"
 });


  return (
    <React.Fragment>
      <BannerBox>
            <Container>
                <BannerInner>
                  <div style= {{marginTop: '-120px'}}>
                    <Inner>
                      <DescText>
                        <div style={{textAlign:'left', width:'105%', margin: '0 13px'}}>
                          Demoim은 <B>예비 개발자/디자이너/기획자</B>가 팀원을 모아
                        </div>
                        <div style={{textAlign:'right', width:'105%', margin: '0 13px'}}>
                        자신의 경험을 쌓아 나갈 수 있는 <B>팀 빌딩 플랫폼</B>입니다.
                        </div>
                      </DescText>
                    </Inner>
                  </div>
                </BannerInner>
                <Inner>
                    <GrayBox>
                      <Logo>
                        <span>De</span>
                        &nbsp;&nbsp;&nbsp; +  &nbsp;&nbsp;&nbsp;
                        moim
                      </Logo>
                    </GrayBox>
                </Inner>
                <div style={{textAlign:'center',  width:'240px', margin: '30px auto',
                            display: 'flex'
                            }}>
                  <div style={{textAlign:'left', width:'120px', margin: '0 13px'}}>
                    <P>
                      <span>De</span>signer<br/>
                      <span>De</span>veloper<br/>
                      기획자
                    </P>
                  </div>
                  <div style={{textAlign:'left', width:'120px', margin: 'auto'}}>
                    <P>
                      들의 &nbsp; 모임
                    </P>
                  </div>
                </div>
            </Container>
      </BannerBox>
      <BlueBox>
            <Container>
                <div style={{textAlign:'left', width:'60%', margin: '10px auto', padding:'10px'}}>
                  <DescText>
                    많은 IT 기업들이 <br/>
                    <B>협업 능력</B>을 갖춘 인재를 원하고 있는 요즘,
                  </DescText>
                </div>
                <div style={{textAlign:'right', width:'50%', margin: '10px auto', padding:'10px',
                  display:'flex',justifyContent:'space-around'
                }}>
                  <ImgBox>
                    <BannerImg src={Team} />
                  </ImgBox>
                  <DescText>
                    취업을 위한 <B>팀 프로젝트 경험</B> 은 <br/>
                    이젠, 필수가 되었습니다.
                  </DescText>
                </div>
            </Container>
      </BlueBox>
      <WhiteBox>
            <Container>
              <Inner>
                <DescText>
                  <B>하지만 홀로 공부하는 사람들은<br/>
                  팀원을 어떻게 찾아야 할까요?</B>
                </DescText>
                <DescText>
                  아직도 국비, 부트캠프의 시작을 기다리느라<br/>
                  소중한 시간을 허비하고 계신가요?
                </DescText>
              </Inner>
              <MarginBox/>
              <Inner>
                <div style={{backgroundColor:'#d7d5ef', width:'450px', padding:'20px',margin:'auto',
                  borderRadius:'50%'
                }}>
                  <B>팀 프로젝트 전용 플랫폼<br/>
                  Demoim에서 하루 빨리 팀원을 구해보세요!</B>
                </div>
                <MarginBox/>
                <MarginBox/>
                <P>
                  <span style={{fontSize:'28px',fontWeight:'600'}}>Now</span> &nbsp;&nbsp;  Demoim에서는 지금 당장 시작 가능합니다.
                </P><br/>
                <div style={{margin:'25px'}}></div>
                <P>
                  <span style={{fontSize:'28px',fontWeight:'600'}}>Free</span> &nbsp; &nbsp; 비용없이 팀 프로젝트를 경험 할 수 있습니다.
                </P>
              </Inner>
              <MarginBox/>
              <MarginBox/>
          
            </Container>
      </WhiteBox>
      <BlueBox>
        <Inner>
          <PurpleRadiusBox>
                  Demoim은 이런 분들에게 적합해요!
          </PurpleRadiusBox>
        </Inner>
        <div style={{margin:'40px'}}></div>
        <ListBox>
            <div style={{textAlign: 'center', margin:'0 30px 10px 50px', width:'20%'}}>
              <ImgCircle src={Teamwork}/>
            </div>
            <div style={{lineHeight: '30px', marginTop:'30px'}}>
                <div>
                <Big>팀 프로젝트를 경험해보고 싶은 사람</Big>
                </div>
            </div>
        </ListBox>
        <ListBox>
            <div style={{textAlign: 'center', margin:'0 30px 10px 50px', width:'20%'}}>
              <ImgCircle src={De_icon} /> 
            </div>
            <div style={{lineHeight: '30px', marginTop:'20px'}}>
                <div>
                  <Big>
                    포트폴리오를 향상시키고 싶은 <br/>
                    예비 개발자 & 예비 디자이너
                  </Big>
                </div>
            </div>
        </ListBox>
        <ListBox>
            <div style={{textAlign: 'center', margin:'0 30px 10px 50px', width:'20%'}}>
              <ImgCircle src={Planner_icon}/> 
            </div>
            <div style={{lineHeight: '30px', marginTop:'35px'}}>
                <div>
                <Big>예비 기획자들까지도 모두 환영!</Big>
                </div>
            </div>
        </ListBox>
        <MarginBox/>
      </BlueBox>
      <MarginBox/>
  
      <BannerBox>
        <Inner>
          <PurpleRadiusToolTip>
                  Demoim 100% 활용법
          </PurpleRadiusToolTip>
          <MarginBox/>
          <div style={{width:"65%", display:'flex', margin:'auto', justifyContent:'center', gap:'20px'}}>
            <div style={{width:"35%"}} >
              <div  style={{fontSize:'30px', fontWeight:'300', width:'250px', margin:'auto', textAlign:'left'}}>
                ONE
              </div>
              <div style={{margin:'50px 2% 0 30%', letterSpacing:'1.3px', lineHeight:'20px', textAlign:'center', width:'200px'}}>
                <B>프로젝트를 만들어</B>
                <p style={{backgroundColor:'#999cda', color:'white', width:'134px', textAlign:'center', margin:'4px auto', padding:'2px', fontWeight:'500'}}>
                  팀원을 모집해보고</p>
              </div>
            </div>
            <div style={{}} >
              <img style={{width:"300px"}} src = {Project_img01}/>
            </div>
          </div>
        </Inner>
      </BannerBox>
      <BannerBox>
      <Inner>
          <MarginBox/>
          <MarginBox/>
          <div style={{width:"65%", display:'flex', margin:'auto', justifyContent:'center', gap:'20px'}}>
            <div style={{}} >
              <img style={{width:"300px"}} src = {Project_img02}/>
            </div>
            <div style={{width:"35%"}} >
              <div  style={{fontSize:'30px', fontWeight:'300', width:'120px', margin:'0 0 0 50%', textAlign:'center'}}>
                TWO
              </div>
              <div style={{margin:'50px 0 0 0', letterSpacing:'1.3px', lineHeight:'20px', textAlign:'center', width:'200px'}}>
                <p style={{backgroundColor:'#999cda', color:'white', width:'90px', margin:'50px 0 0 50%', padding:'2px', fontWeight:'500'}}>
                  팀원도 되어
                </p>
                <B>협업의 경험을 쌓아보세요</B>
              </div>
            </div>
          </div>
        </Inner>
      </BannerBox>
      <BannerBox>
        <Inner>
            <MarginBox/>
            <div style={{width:"65%", display:'flex', margin:'auto', justifyContent:'center', gap:'80px'}}>
              <div style={{width:"35%"}} >
                <div  style={{fontSize:'30px', fontWeight:'300', width:'250px', margin:'auto', textAlign:'left'}}>
                  THREE
                </div>
                <div style={{margin:'50px 15% 0 30%', letterSpacing:'1.3px', lineHeight:'20px', textAlign:'left', width:'200px'}}>
                  <B>팀 프로젝트 공유를 통해</B>
                  <p style={{backgroundColor:'#999cda', color:'white', width:'240px', textAlign:'center', margin:'4px auto', padding:'2px', fontWeight:'500'}}>
                    타 유저들과 소통하는 재미까지!</p>
                </div>
              </div>
              <div style={{}} >
                <img style={{width:"300px"}} src = {Project_img03}/>
              </div>
            </div>
          </Inner>
      </BannerBox>
      <BlueBox>
        <div style={{
          textAlign:'center', backgroundColor:'#ebf2ff', height:'130px', padding:'10px',
          lineHeight:'110px', margin:'0 0 -100px'

        }}>
          <B>지금 바로 리더가 되어 팀을 모아보세요!</B>
          <button style={{
          margin:'50px', border:'none',width:'120px', height:'35px', padding:'10px', 
          backgroundColor:'white', borderRadius:'25px'
          }}><B>팀 꾸리러 가기</B> </button>
        </div> 
      </BlueBox>
    </React.Fragment>
  )
}

export default Service


const PurpleRadiusBox = styled.div`
  position: relative;
  padding: 10px;
  top: -18px;
  background-color: #999cda;
  width:350px;
  margin: auto;
  color: white;
  font-weight: 550;
  border-radius:20px;
`;

const PurpleRadiusToolTip = styled.div`
  position: relative;
  padding: 10px;
  top: -18px;
  background-color: #999cda;
  width:220px;
  margin: auto;
  color: white;
  font-weight: 550;
  border-radius:20px;
  &:after {
    content: '';
    position: absolute;
    transform: rotate(180deg);
    border-style: solid;
    border-width: 0 6px 10px 6px;
    border-color: #999cda transparent;
    display: block;
    z-index: 1;
    top: 35px;
    left: 115px;
    }
`;

const ListBox = styled.div`
  display: flex;
  width:460px;
  margin: 10px auto;
`;

const ImgCircle = styled.img`
  width:100px;
  height:100px;
  border-radius: 100%;
  overflow: hidden;
 
`;

const MarginBox = styled.div`
  height: 50px;
`;

const WhiteBox = styled.div`
  margin-bottom:80px
`;

const BannerBox = styled.div`
   width:100%;
   height: 415px;
   background: -webkit-linear-gradient( #ebf2ff, #ffffff);
   background: -moz-linear-gradient(#ebf2ff, #ffffff);
   background: -o-linear-gradient(#ebf2ff, #ffffff);
   background: linear-gradient(#ebf2ff, #ffffff);

   @media ${props => props.theme.mobile}{
      height: auto;
   }
`;

const BannerInner = styled.div`
   display: flex;
   padding:130px 10px 0px 10px;
   gap: 15px;
   width:100%;
   justify-content: center;
   margin-left:-50px;

   @media ${props => props.theme.tablet}{
      padding:130px 0px 0px 0px;
      margin-left:0px;
   }
   @media ${props => props.theme.mobile}{
      padding: 80px 0px 0px 0px;
      flex-direction: column;
      align-items: center;
   }
`;

const Inner = styled.div`
    text-align: center;
    margin-top: 80px;
`;

const TitleText = styled.p`
   font-size:1.4em;
   font-weight:bold;

   @media ${props => props.theme.tablet}{
      font-size:2vw;
   }

   @media ${props => props.theme.mobile}{
      font-size: 3vw;
   }
`

const DescText = styled.p`
   margin-top: 30px;
   font-size: 1.2em;
   letter-spacing: -0.5px;
   line-height: 1.3em;

   @media ${props => props.theme.tablet}{
      font-size:1.36vw;
   }
   @media ${props => props.theme.mobile}{
      font-size: 2.5vw;
      text-align:center;
      margin-top:15px;
   }
`;

const B = styled.b`
  font-size:1em;
  font-weight:bold;
`;

const Big = styled.b`
  font-size:1.1em;
  font-weight:500;
`;

const GrayBox = styled.div`
   width: 230px;
   height:40px;
   line-height:55px;
   margin:auto;
   padding: 5px;
   background-color: #f1f1f1;
   border-radius: 50px;
   border: solid 1px #f1f1f1;
`;

const BlueBox = styled.div`
  background-color: #ebf2ff;  
  width: 100vw;
  height:auto;
  margin: 60px auto 100px ;
`;

const P = styled.b`
  color: ${props => props.theme.main_black};
  span{
    color:${props => props.theme.main_color};
  }
  font-weight: 500;
  line-height: 25px;
`;

const Logo = styled.p`
  ${props => props.theme.logo}
  color: ${props => props.theme.main_black};
  span{
    color:${props => props.theme.main_color};
  }
  @media ${props => props.theme.mobile}{
    font-size:5vw;
   
  }
`;

const ImgBox = styled.div`
   margin-top: -10px;
   

  @media ${props => props.theme.mobile}{
      margin-top:30px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

const BannerImg = styled.img`
   width: 100%;

@media ${props => props.theme.mobile}{
      width:90%;
   }
`;
