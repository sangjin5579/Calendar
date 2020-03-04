<template>
  <div class="">
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36가나다라마바사</li>
      </ul>
  </div>
</template>

<script>
import moment from 'moment'
//시계 깜빡깜빡
export default {
    data() {
        return {
            calendar: [{
                id: '', //연월일 
                schedule: [{
                    Contents: '',
                    startDate: '',
                    endDate: '',
                    startTime: '',
                    endTime: '',
                    Color: ''
                }],
                date: ''
            }],
                 
        }
    },
    created() {
        // day객체를 호출할 필요 없다. moment메서드가 현지시각 알랴줌
        console.log(moment())
        //소문자는 local 적용
        console.log(moment().format());
        console.log(moment().format('LL'));// September 4 2020
        console.log(moment().format('YYYY'));
        console.log(moment().format('MM'));// 월
        console.log(moment().format('MMM'));// 월 영어로
        // console.log(moment().format('DD'));// 일
        console.log(moment().date());// 분
        console.log(moment().format('ddd'));// 요일 영어로
        console.log(moment().format('LT'));// 초없는 시간
        console.log(moment().format('H'));// 시
        //console.log(moment().format('m'));// 분
        console.log(moment().minute());// 분
        //console.log(moment().format('s'));// 초
        console.log(moment().second());// 초
        console.log(moment().format('a'));// 오전,오후

        console.log(moment().format('DDDD'));// 연중 일수
        console.log(moment().format('WW'));// 연중 몇주
        console.log(moment('3/1/2020').format('e'));// 해당 날짜의 주번호(1(월)~7(일))
    }
}
</script>

<style scoped>

    li {
        font-family: 'Cute Font';
        font-size: 30px;
        float: left;
        width: calc(100% / 7);
        /* border: 1px solid red; */
    }
</style>