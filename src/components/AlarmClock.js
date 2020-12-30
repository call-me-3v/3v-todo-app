import React, { Fragment, useState, useEffect } from "react";
import audio1 from "./epica.mp3";
import "./AlarmClock.css";

function AlarmClock() {
  const [alarmHours, setAlarmHours] = useState("");
  const [alarmMinutes, setAlarmMinutes] = useState("");
  const [alarmStopper, setAlarmStopper] = useState("");
  const [alarmSetTo, setAlarmSetTo] = useState("");
  const [colon, setColon] = useState("");

  const set_alarm = () => {
    const selectorHour = document.querySelector(".hour__selector").value;
    setAlarmHours(selectorHour);
    const selectorMinute = document.querySelector(".minute__selector").value;
    setAlarmMinutes(selectorMinute);
    console.log(selectorHour + ":" + selectorMinute);
    setAlarmSetTo("Alarm is set to ")
    setColon(":")
    check_Alarm();
  };

  const check_Alarm = () => {
    const checker = setInterval(function () {
      const time = new Date();
      const current_hour = time.getHours();
      const current_minute = time.getMinutes();
      const current_second = time.getSeconds();
      console.log(current_hour + ":" + current_minute);
      if (
        alarmHours == current_hour &&
        alarmMinutes == current_minute &&
        current_second < 12
      ) {
        if (alarmStopper == "True") {
          clearInterval(checker);
        }
        document.querySelector(".audio1").play();
      }
    }, 10000);
  };

  const stop_alarm = () => {
    document.querySelector(".audio1").pause();
    document.querySelector(".audio1").currentTime = 0;

    setAlarmStopper("true");
    check_Alarm();
  };

  useEffect(() => {
    check_Alarm();
  });

  return (
    <>
      <div className="alarm__container">
        <div className="alarm__header">
          <span className="alarm_header_span">ALARM</span>
        </div>
        <div className="alarm__time">
          <span className="set_alarm_span">Set an alarm</span>
          <span>
            <select className="hour__selector">
              <option>00</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
            </select>
            <select className="minute__selector">
              <option>00</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
              <option>32</option>
              <option>33</option>
              <option>34</option>
              <option>35</option>
              <option>36</option>
              <option>37</option>
              <option>38</option>
              <option>39</option>
              <option>40</option>
              <option>41</option>
              <option>42</option>
              <option>43</option>
              <option>44</option>
              <option>45</option>
              <option>46</option>
              <option>47</option>
              <option>48</option>
              <option>49</option>
              <option>50</option>
              <option>51</option>
              <option>52</option>
              <option>53</option>
              <option>54</option>
              <option>55</option>
              <option>56</option>
              <option>57</option>
              <option>58</option>
              <option>59</option>
            </select>
            <button className="set_alarm_btn" onClick={set_alarm}>
              Set Alarm
            </button>
            <button className="stop_alarm_btn" onClick={stop_alarm}>
              Stop Alarm
            </button>
          </span>
        </div>
        <div className="div__option2">{alarmSetTo} {alarmHours} {colon} {alarmMinutes}</div>
      </div>
      <div>
        <audio autoPla className="audio1">
          <source src={audio1} type="audio/mp3" />
        </audio>
      </div>
    </>
  );
}

export default AlarmClock;
