import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss'

interface Props {}

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch();

    const {weather} = useCustomSelector( (state) => state.currentWeatherSliceReducer.weather)

    useEffect(() => {
        dispatch(fetchCurrentWeather('Moscow'))
    }, [])
    return (
    <div className={s.home}>
    <div className={s.wrapper}>
        <ThisDay  weather={wether}/>
        <ThisDayInfo />
        </div>
        <Days />
    </div>
    );
};
