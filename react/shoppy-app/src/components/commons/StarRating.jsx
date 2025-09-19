import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";

export function StarRating({totalRate, style}) {
    totalRate = parseInt(totalRate);
    const stars = [...Array(5)];
    const color = (style === "star-coral") ? "coral" : "black"; //Review

    const fillStars = Math.floor(totalRate);    //채워진 별 갯수
    const halfStar = (totalRate % 1) !== 0;     //반별 여부 체크
    const emptyStar = 5 - fillStars - (halfStar ? 1 : 0);   //빈 별 갯수

    return (
        <div className='star-rating'>
            {/* fillStars : 채워진 별 추가 */}
            {[...Array(fillStars)].map((_, i) => 
                <span   key={i}
                        className={style.concat(" ", color)}>
                        <TiStarFullOutline />
                </span>
            )}

            {/* halfStars : 반별 추가 */}
            { halfStar && 
                <span   key={halfStar}
                        className={style.concat(" ", color)}>
                        <TiStarHalfOutline />
                </span>
            }

            {/* emptyStars : 빈 별 추가 */}
            {[...Array(emptyStar)].map((_, i) => 
                <span   key={i}
                        className={style.concat(" ", color)}>
                        <TiStarOutline />
                </span>
            )}

            {/* 별점 표시 */}
            { style === "star-coral" &&
                <>
                    <span className={style.concat("number")}>{totalRate}</span>
                </>
            }
        </div>
    );
}