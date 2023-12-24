import React, { useEffect } from 'react';
import styled from 'styled-components';
import SliderCard from './SliderCard';
import { useQuery } from '@apollo/client';
import { GetRocketsQuery } from '../../../gql/graphql';
import { GET_ROCKETS } from '../../queries/queries.graphql';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import "../../../MySwiper.css"
import BtnForSlider from '../atoms/BtnsForSlider';
import { useRecoilState } from 'recoil';
import { allRockets, pageTypeState } from '../../state/atoms';
import { ColorRing } from 'react-loader-spinner';

const SpinnerWrapper = styled.div`
    height: 572px;
    display: flex;
    justify-content: center;
    align-items: center;
` 
const StyledCardsDiv = styled.div`
    margin-top: 40px;
    height: 572px;
`
const WrapperBtns = styled.div`
    width: 100%;
    height: 44px;
    position: absolute;
    top: -84px;
`
const BlockOfBtns = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
`
const ArrowsBtns = styled.div`
    width: 104px;
    display: flex;
    justify-content: space-between;
`
const images = [
    '/images/SliderFrame1.png', 
    '/images/SliderFrame2.png', 
    '/images/SliderFrame3.png'
];
const swiperConfig = {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    slidesPerView: 3,
    slidesPerGroup:1,
    navigation: {
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
    },
    pagination: {
        el: ".pagination-bullet",
        clickable: true,
        renderBullet: function (index:number, className:string) {
            if(index < 3) {
            return `<div class="${className}"></div>`;
            }
            else {
                return ""
            }
          },
    },
};
const SliderCards = () => {
    const [finalRockets, setFinalRockets] = useRecoilState(allRockets)
    const { data, loading, error }:any = useQuery<GetRocketsQuery>(GET_ROCKETS);
    const [pageType, setPageType] = useRecoilState(pageTypeState);

    useEffect(() => {
        if(pageType === "main") return
        else setPageType("main");
    }, [])
    if (error) {
        console.log(error.message);
    }

    useEffect(() => {
        if(loading) return
        const startData = [...data.rockets, ...data.rockets].concat(data.rockets.slice(0, 1));
        const finalData = startData.map((rocket, index) => ({
            ...rocket,
            description: rocket.description.slice(0, 42) + "...",
            key: index,
          }));
        const rocketsWithImages = finalData?.map((rocket, index) => {
            const imageIndex = index < 3 ? index : index % 3; 
            return { ...rocket, image: images[imageIndex]}
        })
        setFinalRockets(rocketsWithImages)
    }, [loading])
    
      
    return (
        <StyledCardsDiv className='slider'>
        <>
            {loading 
            ? 
            <SpinnerWrapper>
                <ColorRing
                visible={true}
                height="90"
                width="90"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#81aef7', '#81aef7', '#81aef7', '#81aef7','#81aef7' ]}
                />
            </SpinnerWrapper>
            :
            <Swiper {...swiperConfig}>
            {finalRockets.map((x:any, index:number) => {
                return <SwiperSlide key = {index}> 
                            <SliderCard key = {index} rockets = {x} page = {pageType}/>
                        </SwiperSlide>
                })
            }
            <WrapperBtns>
                <BlockOfBtns>
                    <ArrowsBtns>
                        <BtnForSlider className="button-prev-slide" direction='left'/>
                        <BtnForSlider className="button-next-slide" direction='right'/>
                    </ArrowsBtns>
                </BlockOfBtns>
            </WrapperBtns>
            <div className='bullet-wrapper'>
                <div className='pagination-bullet'/> 
            </div>
            </Swiper>
            }
        </>
        </StyledCardsDiv>
    );
  };

export default SliderCards;