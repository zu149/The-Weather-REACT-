import React from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../../../assets/icons/global/Global.Svg.Selector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss'

interface Props {
    weather: Weather
}

export const ThisDay = ({weather}: Props) => {
    return <div className={s.this__day}>
        <div className={s.top__block}>
<div className={s.top__block_wrapper}>
            <div className={s.this__temp}>{Math.ceil(weather.main.temp)}°</div>
            <div className={s.this__day_name}>Сегодня</div>
</div>
    <GlobalSvgSelector id="sun"/>
        </div>
        <div className={s.bottom__block}>
            <div className={s.this__time}>
                Время: <span>21:54</span>
            </div>
            <div className={s.this__city}>
                Город: <span>Москва</span>
            </div>
        </div>
    </div>  
};
