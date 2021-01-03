import 'regenerator-runtime/runtime'

let dataQuestion = {
    name: '',
    isJoin: '',
    withLover: '',
    songs: '',
}
const container = document.getElementsByClassName('container-fluid')[0];
//render question form
function renderQuestion() {
    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend',`<div class="qs_title"><h2>Bằng Nhung Wedding</h2></div>
        <div class="qs_card">
            <p class="qs_ask"><span>*</span>Tên anh/chị/bạn là </p>
            <label for="question1"></label>
            <input type="text" id="question1"/>
        </div>
        <div class="qs_card">
            <p class="qs_ask">Anh/ Chị/ Bạn sẽ tham gia tiệc cưới của bọn em/mình chứ ?</p>
            <div class="qs_ans">
                <div class="ans" id="sure" onclick="selectAnswer(1,this)">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.5694 55H14.4306C6.45928 55 0 48.5374 0 40.5694V14.4306C0 6.45928 6.45928 0 14.4306 0H40.5694C48.5374 0 55 6.45928 55 14.4306V40.5694C55 48.5374 48.5374 55 40.5694 55Z"
                              fill="white"/>
                        <path d="M11.3412 31.6322C11.6437 29.7685 10.378 28.0125 8.51431 27.71C6.65061 27.4075 4.89458 28.6732 4.59211 30.5369C4.28964 32.4006 5.55527 34.1566 7.41898 34.4591C9.28269 34.7616 11.0387 33.4959 11.3412 31.6322Z"
                              fill="#F38DB3"/>
                        <path d="M49.4491 33.5005C50.7841 32.1654 50.7841 30.0009 49.4491 28.6659C48.114 27.3308 45.9495 27.3308 44.6144 28.6659C43.2794 30.0009 43.2794 32.1654 44.6144 33.5005C45.9495 34.8355 48.114 34.8355 49.4491 33.5005Z"
                              fill="#F38DB3"/>
                        <path d="M34.3555 32.0046C36.1892 32.0046 37.3763 33.9344 36.5606 35.5758C35.022 38.6728 31.5437 40.8314 27.4983 40.8314C23.453 40.8314 19.9747 38.6728 18.4361 35.5758C17.6204 33.9344 18.8075 32.0046 20.6412 32.0046H34.3555Z"
                              fill="#333333"/>
                        <path d="M13.4126 24.66C13.1208 24.4179 12.839 24.1626 12.5737 23.8907C11.4264 22.7268 10.0537 20.8136 10.6107 19.0894C11.0418 17.7564 12.6102 17.3618 13.8636 17.4447C14.5499 17.4911 15.2164 17.6901 15.8365 17.9885C16.0553 18.0946 16.3339 18.2206 16.5792 18.3798C16.8114 18.529 17.1197 18.3698 17.133 18.0913C17.1894 16.9407 17.5972 15.7403 18.6318 15.18C19.7591 14.5699 20.996 14.9744 21.8249 15.8763C23.1579 17.3253 23.0219 19.3182 22.4715 21.0756C22.0836 22.309 21.5895 23.5061 20.9993 24.6534C20.6743 25.28 20.3958 25.9731 19.9249 26.5069C19.0993 27.4453 17.8923 27.2099 16.8744 26.7523C15.6541 26.2118 14.4571 25.5221 13.4126 24.66Z"
                              fill="#ED1C24"/>
                        <path d="M41.5841 24.66C41.8759 24.4179 42.1577 24.1626 42.423 23.8907C43.5703 22.7268 44.943 20.8136 44.386 19.0894C43.9549 17.7564 42.3865 17.3618 41.1331 17.4447C40.4467 17.4911 39.7802 17.6901 39.1602 17.9885C38.9413 18.0946 38.6628 18.2206 38.4174 18.3798C38.1853 18.529 37.877 18.3698 37.8637 18.0913C37.8073 16.9407 37.3995 15.7403 36.3649 15.18C35.2375 14.5699 34.0007 14.9744 33.1718 15.8763C31.8388 17.3253 31.9747 19.3182 32.5252 21.0756C32.9131 22.309 33.4072 23.5061 33.9974 24.6534C34.3224 25.28 34.6009 25.9731 35.0717 26.5069C35.8974 27.4453 37.1044 27.2099 38.1223 26.7523C39.3426 26.2118 40.5396 25.5221 41.5841 24.66Z"
                              fill="#ED1C24"/>
                    </svg>
                    <span>Chắc chắn rồi</span>
                </div>
                <div class="ans" id="not_sure" onclick="selectAnswer(2,this)">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.5694 55H14.4306C6.45928 55 0 48.5374 0 40.5694V14.4306C0 6.45928 6.45928 0 14.4306 0H40.5694C48.5374 0 55 6.45928 55 14.4306V40.5694C55 48.5374 48.5374 55 40.5694 55Z"
                              fill="#FDC013"/>
                        <path d="M15.5712 25.9797C16.8879 25.9797 17.9553 24.1789 17.9553 21.9576C17.9553 19.7362 16.8879 17.9354 15.5712 17.9354C14.2545 17.9354 13.1871 19.7362 13.1871 21.9576C13.1871 24.1789 14.2545 25.9797 15.5712 25.9797Z"
                              fill="#333333"/>
                        <path d="M39.4288 25.9797C40.7455 25.9797 41.8129 24.1789 41.8129 21.9576C41.8129 19.7362 40.7455 17.9354 39.4288 17.9354C38.1121 17.9354 37.0447 19.7362 37.0447 21.9576C37.0447 24.1789 38.1121 25.9797 39.4288 25.9797Z"
                              fill="#333333"/>
                        <path d="M12.2123 36.2655C12.5604 38.1389 14.2018 39.5614 16.1747 39.5614H16.6754V36.2655H12.2123Z"
                              fill="white"/>
                        <path d="M39.2829 39.5349C41.0469 39.3326 42.4661 37.993 42.7844 36.2655H39.2829V39.5349Z"
                              fill="white"/>
                        <path d="M42.7977 34.7932C42.5059 33.0325 41.0734 31.6564 39.2862 31.4542V34.7932H42.7977Z"
                              fill="white"/>
                        <path d="M37.8106 31.4243H33.9974V34.7932H37.8106V31.4243Z" fill="white"/>
                        <path d="M21.9609 31.4243H18.1476V34.7932H21.9609V31.4243Z" fill="white"/>
                        <path d="M27.243 31.4243H23.4298V34.7932H27.243V31.4243Z" fill="white"/>
                        <path d="M32.5285 31.4243H28.7153V34.7932H32.5285V31.4243Z" fill="white"/>
                        <path d="M16.6754 31.4243H16.1747C14.1786 31.4243 12.5206 32.8833 12.2023 34.7932H16.6754V31.4243Z"
                              fill="white"/>
                        <path d="M32.5285 36.2655H28.7153V39.5614H32.5285V36.2655Z" fill="white"/>
                        <path d="M27.243 36.2655H23.4298V39.5614H27.243V36.2655Z" fill="white"/>
                        <path d="M21.9609 36.2655H18.1476V39.5614H21.9609V36.2655Z" fill="white"/>
                        <path d="M37.8106 36.2655H33.9974V39.5614H37.8106V36.2655Z" fill="white"/>
                        <path d="M38.822 29.9554H16.1747C13.1407 29.9554 10.6704 32.4257 10.6704 35.4597V35.5327C10.6704 35.1248 10.9987 34.7965 11.4065 34.7965H11.4596C11.7845 32.4788 13.7674 30.6915 16.1747 30.6915H16.7517C16.871 30.4461 17.1197 30.277 17.4115 30.277C17.7033 30.277 17.952 30.4461 18.0714 30.6915H22.0371C22.1565 30.4461 22.4052 30.277 22.697 30.277C22.9888 30.277 23.2375 30.4461 23.3568 30.6915H27.3226C27.442 30.4461 27.6907 30.277 27.9825 30.277C28.2742 30.277 28.5229 30.4461 28.6423 30.6915H32.6081C32.7274 30.4461 32.9761 30.277 33.2679 30.277C33.5597 30.277 33.8084 30.4461 33.9278 30.6915H37.8935C38.0129 30.4461 38.2616 30.277 38.5534 30.277C38.8518 30.277 39.1071 30.4561 39.2232 30.7114C41.4614 30.8938 43.2553 32.6213 43.5504 34.8231C43.8621 34.9093 44.0942 35.1911 44.0942 35.5293C44.0942 35.8742 43.8587 36.1594 43.5404 36.2389C43.2188 38.3876 41.468 40.0654 39.2862 40.2743C39.2563 40.6523 38.9447 40.9541 38.5567 40.9541C38.1787 40.9541 37.8703 40.6656 37.8305 40.2975H34.0007C33.9609 40.6656 33.6526 40.9541 33.2745 40.9541C32.8965 40.9541 32.5882 40.6656 32.5484 40.2975H28.7086C28.6688 40.6656 28.3605 40.9541 27.9825 40.9541C27.6044 40.9541 27.2961 40.6656 27.2563 40.2975H23.4232C23.3834 40.6656 23.075 40.9541 22.697 40.9541C22.319 40.9541 22.0106 40.6656 21.9708 40.2975H18.141C18.1012 40.6656 17.7928 40.9541 17.4148 40.9541C17.0368 40.9541 16.7285 40.6656 16.6887 40.2975H16.178C13.7972 40.2975 11.8276 38.5501 11.4728 36.2655H11.4065C10.9987 36.2655 10.6704 35.9372 10.6704 35.5293C10.6704 38.5633 13.1407 41.0337 16.1747 41.0337H38.822C41.856 41.0337 44.3263 38.5633 44.3263 35.5293V35.4564C44.3263 32.4224 41.8593 29.9554 38.822 29.9554Z"
                              fill="#333333"/>
                        <path d="M32.5285 39.5614H28.7153V40.218C28.7153 40.2445 28.7086 40.271 28.7086 40.2975H32.5384C32.5351 40.271 32.5318 40.2445 32.5318 40.218V39.5614H32.5285Z"
                              fill="#333333"/>
                        <path d="M16.6754 39.5614H16.1747C14.2018 39.5614 12.5604 38.1389 12.2123 36.2655H11.4695C11.8243 38.5468 13.7906 40.2975 16.1747 40.2975H16.6854C16.682 40.271 16.6787 40.2445 16.6787 40.218V39.5614H16.6754Z"
                              fill="#333333"/>
                        <path d="M33.9974 31.4243H37.8106V31.0098C37.8106 30.8938 37.8405 30.7877 37.8869 30.6882H33.9211C33.9676 30.7844 33.9974 30.8938 33.9974 31.0098V31.4243Z"
                              fill="#333333"/>
                        <path d="M27.243 39.5614H23.4298V40.218C23.4298 40.2445 23.4232 40.271 23.4232 40.2975H27.253C27.2496 40.271 27.2463 40.2445 27.2463 40.218V39.5614H27.243Z"
                              fill="#333333"/>
                        <path d="M16.1747 31.4243H16.6754V31.0098C16.6754 30.8938 16.7052 30.7877 16.7517 30.6882H16.1747C13.7674 30.6882 11.7812 32.4754 11.4596 34.7932H12.2023C12.5206 32.8866 14.1786 31.4243 16.1747 31.4243Z"
                              fill="#333333"/>
                        <path d="M37.8106 39.5614H33.9974V40.218C33.9974 40.2445 33.9908 40.271 33.9908 40.2975H37.8206C37.8173 40.271 37.8139 40.2445 37.8139 40.218V39.5614H37.8106Z"
                              fill="#333333"/>
                        <path d="M21.9609 39.5614H18.1476V40.218C18.1476 40.2445 18.141 40.271 18.141 40.2975H21.9708C21.9675 40.271 21.9642 40.2445 21.9642 40.218V39.5614H21.9609Z"
                              fill="#333333"/>
                        <path d="M28.7153 31.4243H32.5285V31.0098C32.5285 30.8938 32.5583 30.7877 32.6047 30.6882H28.639C28.6854 30.7844 28.7153 30.8938 28.7153 31.0098V31.4243Z"
                              fill="#333333"/>
                        <path d="M23.4298 31.4243H27.243V31.0098C27.243 30.8938 27.2729 30.7877 27.3193 30.6882H23.3568C23.4033 30.7844 23.4331 30.8938 23.4331 31.0098V31.4243H23.4298Z"
                              fill="#333333"/>
                        <path d="M39.2829 31.4542C41.0701 31.6597 42.5026 33.0358 42.7944 34.7932H43.3481C43.4144 34.7932 43.4807 34.8065 43.5404 34.8231C43.2453 32.618 41.4514 30.8938 39.2132 30.7114C39.253 30.8043 39.2796 30.9037 39.2796 31.0132V31.4542H39.2829Z"
                              fill="#333333"/>
                        <path d="M18.1476 31.4243H21.9609V31.0098C21.9609 30.8938 21.9907 30.7877 22.0371 30.6882H18.0714C18.1178 30.7844 18.1476 30.8938 18.1476 31.0098V31.4243Z"
                              fill="#333333"/>
                        <path d="M42.7844 36.2655C42.4661 37.9897 41.0469 39.3326 39.2829 39.5349V40.218C39.2829 40.2378 39.2796 40.2544 39.2762 40.2743C41.4614 40.0687 43.2088 38.3876 43.5305 36.2389C43.4708 36.2522 43.4111 36.2655 43.3481 36.2655H42.7844Z"
                              fill="#333333"/>
                        <path d="M27.243 35.5293H23.4298V36.2655H27.243V35.5293Z" fill="#333333"/>
                        <path d="M37.8106 34.7932H33.9974V35.5293H37.8106V34.7932Z" fill="#333333"/>
                        <path d="M32.5285 34.7932H28.7153V35.5293H32.5285V34.7932Z" fill="#333333"/>
                        <path d="M32.5285 35.5293H28.7153V36.2655H32.5285V35.5293Z" fill="#333333"/>
                        <path d="M39.2829 35.5293H42.854V35.4564C42.854 35.2309 42.8308 35.0088 42.7944 34.7932H39.2829V35.5293Z"
                              fill="#333333"/>
                        <path d="M27.243 34.7932H23.4298V35.5293H27.243V34.7932Z" fill="#333333"/>
                        <path d="M39.2829 35.6686H42.7844C42.8275 35.3105 42.854 34.9424 42.854 34.5677H39.2829V35.6686Z"
                              fill="#333333"/>
                        <path d="M37.8106 35.5293H33.9974V36.2655H37.8106V35.5293Z" fill="#333333"/>
                        <path d="M21.9609 34.7932H18.1476V35.5293H21.9609V34.7932Z" fill="#333333"/>
                        <path d="M16.6754 34.7932H12.2023C12.1659 35.0088 12.1426 35.2309 12.1426 35.4564V35.5293H16.6754V34.7932Z"
                              fill="#333333"/>
                        <path d="M21.9609 35.5293H18.1476V36.2655H21.9609V35.5293Z" fill="#333333"/>
                        <path d="M16.6754 36.2655V35.5293H12.1426C12.1426 35.7813 12.1692 36.0267 12.2123 36.2655H16.6754Z"
                              fill="#333333"/>
                        <path d="M43.5902 35.5293C43.5902 35.7714 43.5669 36.0068 43.5305 36.2389C43.8488 36.1594 44.0842 35.8709 44.0842 35.5293C44.0842 35.1911 43.8521 34.9093 43.5404 34.8231C43.5669 35.032 43.5868 35.2409 43.5868 35.4564V35.5293H43.5902Z"
                              fill="#333333"/>
                        <path d="M11.4065 36.2655H11.4695C11.433 36.0267 11.4065 35.7814 11.4065 35.5293V35.4564C11.4065 35.2309 11.4264 35.0088 11.4596 34.7932H11.4065C10.9987 34.7932 10.6704 35.1215 10.6704 35.5293C10.6704 35.9372 11.002 36.2655 11.4065 36.2655Z"
                              fill="#333333"/>
                        <path d="M42.7977 34.7932C42.8341 35.0088 42.8574 35.2309 42.8574 35.4564V35.5293H43.3514H42.8574C42.8574 35.7814 42.8308 36.0267 42.7877 36.2655H43.3547C43.4177 36.2655 43.4774 36.2555 43.5371 36.2389C43.5703 36.0068 43.5968 35.7714 43.5968 35.5293V35.4564C43.5968 35.2409 43.5769 35.0287 43.5504 34.8231C43.4874 34.8065 43.4244 34.7932 43.358 34.7932H42.7977Z"
                              fill="#333333"/>
                        <path d="M11.4065 35.5293H12.1426V35.4564C12.1426 35.2309 12.1659 35.0088 12.2023 34.7932H11.4596C11.4297 35.0121 11.4065 35.2309 11.4065 35.4564V35.5293Z"
                              fill="#333333"/>
                        <path d="M12.1426 35.5293H11.4065C11.4065 35.7813 11.4331 36.0234 11.4695 36.2655H12.2123C12.1692 36.0267 12.1426 35.7813 12.1426 35.5293Z"
                              fill="#333333"/>
                        <path d="M17.4115 31.4243H16.6754V34.7932H17.4115V31.4243Z" fill="#333333"/>
                        <path d="M17.4115 36.2655H16.6754V39.5614H17.4115V36.2655Z" fill="#333333"/>
                        <path d="M18.1476 31.4243H17.4115V34.7932H18.1476V31.4243Z" fill="#333333"/>
                        <path d="M18.1476 36.2655H17.4115V39.5614H18.1476V36.2655Z" fill="#333333"/>
                        <path d="M17.4115 40.9541C17.7895 40.9541 18.0979 40.6656 18.1377 40.2975H16.682C16.7251 40.6656 17.0335 40.9541 17.4115 40.9541Z"
                              fill="#333333"/>
                        <path d="M17.4115 30.2737C17.1197 30.2737 16.871 30.4428 16.7517 30.6882H18.0714C17.952 30.4461 17.7033 30.2737 17.4115 30.2737Z"
                              fill="#333333"/>
                        <path d="M18.1476 39.5614H17.4115V40.218V39.5614H16.6754V40.218C16.6754 40.2445 16.682 40.271 16.682 40.2975H18.1377C18.141 40.271 18.1443 40.2445 18.1443 40.218V39.5614H18.1476Z"
                              fill="#333333"/>
                        <path d="M16.6754 31.4243H17.4115V31.0098V31.4243H18.1476V31.0098C18.1476 30.8938 18.1178 30.7877 18.0714 30.6882H16.7517C16.7052 30.7844 16.6754 30.8938 16.6754 31.0098V31.4243Z"
                              fill="#333333"/>
                        <path d="M17.4115 35.5293H16.6754V36.2655H17.4115V35.5293Z" fill="#333333"/>
                        <path d="M17.4115 34.7932H16.6754V35.5293H17.4115V34.7932Z" fill="#333333"/>
                        <path d="M18.1476 34.7932H17.4115V35.5293H18.1476V34.7932Z" fill="#333333"/>
                        <path d="M18.1476 35.5293H17.4115V36.2655H18.1476V35.5293Z" fill="#333333"/>
                        <path d="M23.4331 36.2655H22.697V39.5614H23.4331V36.2655Z" fill="#333333"/>
                        <path d="M23.4331 31.4243H22.697V34.7932H23.4331V31.4243Z" fill="#333333"/>
                        <path d="M22.697 31.4243H21.9609V34.7932H22.697V31.4243Z" fill="#333333"/>
                        <path d="M22.697 36.2655H21.9609V39.5614H22.697V36.2655Z" fill="#333333"/>
                        <path d="M22.697 30.2737C22.4052 30.2737 22.1565 30.4428 22.0371 30.6882H23.3568C23.2375 30.4461 22.9855 30.2737 22.697 30.2737Z"
                              fill="#333333"/>
                        <path d="M22.697 40.9541C23.075 40.9541 23.3834 40.6656 23.4232 40.2975H21.9675C22.0073 40.6656 22.3157 40.9541 22.697 40.9541Z"
                              fill="#333333"/>
                        <path d="M23.4298 39.5614H22.6937V40.218V39.5614H21.9576V40.218C21.9576 40.2445 21.9642 40.271 21.9642 40.2975H23.4198C23.4232 40.271 23.4265 40.2445 23.4265 40.218V39.5614H23.4298Z"
                              fill="#333333"/>
                        <path d="M21.9609 31.4243H22.697V31.0098V31.4243H23.4331V31.0098C23.4331 30.8938 23.4033 30.7877 23.3568 30.6882H22.0371C21.9907 30.7844 21.9609 30.8938 21.9609 31.0098V31.4243Z"
                              fill="#333333"/>
                        <path d="M22.697 34.7932H21.9609V35.5293H22.697V34.7932Z" fill="#333333"/>
                        <path d="M22.697 35.5293H21.9609V36.2655H22.697V35.5293Z" fill="#333333"/>
                        <path d="M23.4331 34.7932H22.697V35.5293H23.4331V34.7932Z" fill="#333333"/>
                        <path d="M23.4331 35.5293H22.697V36.2655H23.4331V35.5293Z" fill="#333333"/>
                        <path d="M28.7153 31.4243H27.9791V34.7932H28.7153V31.4243Z" fill="#333333"/>
                        <path d="M27.9791 36.2655H27.243V39.5614H27.9791V36.2655Z" fill="#333333"/>
                        <path d="M27.9791 31.4243H27.243V34.7932H27.9791V31.4243Z" fill="#333333"/>
                        <path d="M28.7153 36.2655H27.9791V39.5614H28.7153V36.2655Z" fill="#333333"/>
                        <path d="M27.9791 40.9541C28.3571 40.9541 28.6655 40.6656 28.7053 40.2975H27.2496C27.2928 40.6656 27.6011 40.9541 27.9791 40.9541Z"
                              fill="#333333"/>
                        <path d="M27.9791 30.2737C27.6873 30.2737 27.4387 30.4428 27.3193 30.6882H28.639C28.5196 30.4461 28.2709 30.2737 27.9791 30.2737Z"
                              fill="#333333"/>
                        <path d="M28.7153 39.5614H27.9791V40.218V39.5614H27.243V40.218C27.243 40.2445 27.2497 40.271 27.2497 40.2975H28.7053C28.7086 40.271 28.7119 40.2445 28.7119 40.218V39.5614H28.7153Z"
                              fill="#333333"/>
                        <path d="M27.243 31.4243H27.9791V31.0098V31.4243H28.7153V31.0098C28.7153 30.8938 28.6854 30.7877 28.639 30.6882H27.3193C27.2729 30.7844 27.243 30.8938 27.243 31.0098V31.4243Z"
                              fill="#333333"/>
                        <path d="M28.7153 35.5293H27.9791V36.2655H28.7153V35.5293Z" fill="#333333"/>
                        <path d="M27.9791 35.5293H27.243V36.2655H27.9791V35.5293Z" fill="#333333"/>
                        <path d="M28.7153 34.7932H27.9791V35.5293H28.7153V34.7932Z" fill="#333333"/>
                        <path d="M27.9791 34.7932H27.243V35.5293H27.9791V34.7932Z" fill="#333333"/>
                        <path d="M33.2646 36.2655H32.5285V39.5614H33.2646V36.2655Z" fill="#333333"/>
                        <path d="M34.0007 36.2655H33.2646V39.5614H34.0007V36.2655Z" fill="#333333"/>
                        <path d="M34.0007 31.4243H33.2646V34.7932H34.0007V31.4243Z" fill="#333333"/>
                        <path d="M33.2646 31.4243H32.5285V34.7932H33.2646V31.4243Z" fill="#333333"/>
                        <path d="M33.2646 40.9541C33.6426 40.9541 33.951 40.6656 33.9908 40.2975H32.5351C32.5749 40.6656 32.8833 40.9541 33.2646 40.9541Z"
                              fill="#333333"/>
                        <path d="M33.2646 30.2737C32.9728 30.2737 32.7241 30.4428 32.6048 30.6882H33.9245C33.8051 30.4461 33.5531 30.2737 33.2646 30.2737Z"
                              fill="#333333"/>
                        <path d="M33.9974 39.5614H33.2613V40.218V39.5614H32.5285V40.218C32.5285 40.2445 32.5351 40.271 32.5351 40.2975H33.9908C33.9941 40.271 33.9974 40.2445 33.9974 40.218V39.5614Z"
                              fill="#333333"/>
                        <path d="M32.5285 31.4243H33.2646V31.0098V31.4243H34.0007V31.0098C34.0007 30.8938 33.9709 30.7877 33.9245 30.6882H32.6048C32.5583 30.7844 32.5285 30.8938 32.5285 31.0098V31.4243Z"
                              fill="#333333"/>
                        <path d="M33.2646 35.5293H32.5285V36.2655H33.2646V35.5293Z" fill="#333333"/>
                        <path d="M34.0007 34.7932H33.2646V35.5293H34.0007V34.7932Z" fill="#333333"/>
                        <path d="M34.0007 35.5293H33.2646V36.2655H34.0007V35.5293Z" fill="#333333"/>
                        <path d="M33.2646 34.7932H32.5285V35.5293H33.2646V34.7932Z" fill="#333333"/>
                        <path d="M38.5467 31.4243H37.8106V34.7932H38.5467V31.4243Z" fill="#333333"/>
                        <path d="M38.5468 36.2655V39.5614H38.822C38.9778 39.5614 39.1303 39.5515 39.2829 39.5349V36.2655H38.5468Z"
                              fill="#333333"/>
                        <path d="M38.5467 36.2655H37.8106V39.5614H38.5467V36.2655Z" fill="#333333"/>
                        <path d="M39.2829 34.7932V31.4542C39.1303 31.4376 38.9778 31.4276 38.822 31.4276H38.5468V34.7966H39.2829V34.7932Z"
                              fill="#333333"/>
                        <path d="M39.2166 30.7114C39.1005 30.4561 38.8452 30.277 38.5468 30.277C38.255 30.277 38.0063 30.4461 37.8869 30.6915H38.822C38.9579 30.6915 39.0872 30.6982 39.2166 30.7114Z"
                              fill="#333333"/>
                        <path d="M37.8206 40.2975C37.8604 40.6656 38.1687 40.9541 38.5467 40.9541C38.9347 40.9541 39.2464 40.6556 39.2762 40.2743C39.127 40.2876 38.9745 40.2975 38.822 40.2975H37.8206Z"
                              fill="#333333"/>
                        <path d="M39.2829 39.5349C39.1303 39.5515 38.9778 39.5614 38.822 39.5614H38.5467V40.2179V39.5614H37.8106V40.2179C37.8106 40.2445 37.8173 40.271 37.8173 40.2975H38.822C38.9745 40.2975 39.127 40.2876 39.2762 40.2743C39.2762 40.2544 39.2829 40.2378 39.2829 40.2179V39.5349Z"
                              fill="#333333"/>
                        <path d="M37.8106 31.4243H38.5467V31.0098V31.4243H38.822C38.9778 31.4243 39.1303 31.4343 39.2829 31.4509V31.0065C39.2829 30.9004 39.2597 30.7976 39.2165 30.7048C39.0872 30.6948 38.9546 30.6849 38.822 30.6849H37.8869C37.8405 30.7811 37.8106 30.8905 37.8106 31.0065V31.4243Z"
                              fill="#333333"/>
                        <path d="M39.2829 35.5293H38.5468V36.2655H39.2829V35.5293Z" fill="#333333"/>
                        <path d="M38.5467 35.5293H37.8106V36.2655H38.5467V35.5293Z" fill="#333333"/>
                        <path d="M39.2829 34.7932H38.5468V35.5293H39.2829V34.7932Z" fill="#333333"/>
                        <path d="M38.5467 34.7932H37.8106V35.5293H38.5467V34.7932Z" fill="#333333"/>
                    </svg>
                    <span>Chưa chắc chắn</span>
                </div>
            </div>
        </div>
        <div class="qs_card">
            <p class="qs_ask">Anh/ Chị/ Bạn nhớ dẫn thêm người thương đi cùng nha</p>
            <div class="qs_ans">
                <div class="ans" id="ok_man" onclick="selectAnswer(3,this)">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.5694 55H14.4306C6.45928 55 0 48.5374 0 40.5694V14.4306C0 6.45928 6.45928 0 14.4306 0H40.5694C48.5374 0 55 6.45928 55 14.4306V40.5694C55 48.5374 48.5374 55 40.5694 55Z"
                              fill="#FDC013"/>
                        <path d="M15.2794 25.7907C16.543 25.7907 17.5674 24.0641 17.5674 21.9343C17.5674 19.8046 16.543 18.078 15.2794 18.078C14.0158 18.078 12.9915 19.8046 12.9915 21.9343C12.9915 24.0641 14.0158 25.7907 15.2794 25.7907Z"
                              fill="#333333"/>
                        <path d="M36.4876 19.9581C36.1593 20.0775 35.8443 20.2267 35.5658 20.4356C34.1334 21.5099 35.6885 22.7965 36.6932 23.4265C37.7841 24.1129 39.5515 25.3331 40.911 25.0678C41.1232 25.0247 41.3486 24.9352 41.4548 24.7462C41.9687 23.8542 40.5363 23.4298 39.956 23.1778C39.5249 22.9921 38.6827 22.5743 38.7324 21.994C38.749 21.8216 38.8518 21.6724 38.9745 21.553C39.8267 20.7241 41.6504 20.9661 41.9853 19.5867C42.0317 19.401 42.0019 19.1921 41.8759 19.0462C41.7532 18.907 41.5609 18.8506 41.3785 18.8174C40.2445 18.6251 39.127 19.0164 38.0859 19.4342C37.5785 19.6398 37.0148 19.7625 36.4876 19.9581Z"
                              fill="#333333"/>
                        <path d="M22.7169 38.119C26.2781 38.371 30.0648 37.7078 33.1386 35.8244C33.9908 35.3039 34.7833 34.6904 35.4929 33.9875C35.8145 33.6691 36.1295 33.3309 36.408 32.9761C36.6202 32.7042 37.1674 31.6929 37.5818 32.2599C37.9598 32.7772 37.0944 33.9643 36.8225 34.3953C35.1381 37.0712 32.187 38.812 29.1364 39.4586C27.4917 39.8068 25.8006 39.9029 24.1261 39.7869C23.3336 39.7305 22.5445 39.6277 21.7553 39.5117C21.0888 39.4122 20.3626 39.3625 19.7989 38.948C19.5204 38.7424 19.527 38.3843 19.7691 38.1555C20.0576 37.8803 20.555 37.877 20.9263 37.9101C21.5265 37.9764 22.1167 38.0759 22.7169 38.119Z"
                              fill="#333333"/>
                    </svg>
                    <span>OK man</span>
                </div>
                <div class="ans" id="alone" onclick="selectAnswer(4,this)">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.4036 55H14.5964C6.53554 55 0 48.4645 0 40.4036V14.5964C0 6.53554 6.53554 0 14.5964 0H40.4036C48.4645 0 55 6.53554 55 14.5964V40.4036C55 48.4645 48.4645 55 40.4036 55Z"
                              fill="#939598"/>
                        <path d="M21.5398 27.2165H8.29957C7.89172 27.2165 7.56345 26.8882 7.56345 26.4804C7.56345 26.0725 7.89172 25.7443 8.29957 25.7443H21.5398C21.9476 25.7443 22.2759 26.0725 22.2759 26.4804C22.2759 26.8882 21.9476 27.2165 21.5398 27.2165Z"
                              fill="#333333"/>
                        <path d="M46.6971 27.2165H33.4569C33.0491 27.2165 32.7208 26.8882 32.7208 26.4804C32.7208 26.0725 33.0491 25.7443 33.4569 25.7443H46.6971C47.105 25.7443 47.4332 26.0725 47.4332 26.4804C47.4332 26.8882 47.105 27.2165 46.6971 27.2165Z"
                              fill="#333333"/>
                        <path d="M21.5398 30.3069H8.29957C7.89172 30.3069 7.56345 29.9786 7.56345 29.5708C7.56345 29.1629 7.89172 28.8346 8.29957 28.8346H21.5398C21.9476 28.8346 22.2759 29.1629 22.2759 29.5708C22.2759 29.9753 21.9476 30.3069 21.5398 30.3069Z"
                              fill="#333333"/>
                        <path d="M46.6971 30.3069H33.4569C33.0491 30.3069 32.7208 29.9786 32.7208 29.5708C32.7208 29.1629 33.0491 28.8346 33.4569 28.8346H46.6971C47.105 28.8346 47.4332 29.1629 47.4332 29.5708C47.4332 29.9753 47.105 30.3069 46.6971 30.3069Z"
                              fill="#333333"/>
                        <path d="M52.2711 20.0078C52.2711 22.6605 51.2067 23.4165 49.7444 23.4165C48.2821 23.4165 46.9723 22.6638 46.9723 20.0078C46.9723 17.3518 48.0599 11.8674 49.5222 11.8674C50.9878 11.8674 52.2711 17.3518 52.2711 20.0078Z"
                              fill="#333333"/>
                    </svg>
                    <span>Đợi kiếm đã ~~</span>
                </div>
            </div>
        </div>
        <div class="qs_card">
            <p class="qs_ask">Anh/Chị/Bạn đăng ký hát mấy bài để góp vui cùng bọn em/mình nhé</p>
            <label for="question4"></label>
            <input type="text" id="question4"/>
        </div>
        <button class="qs_btn" type="button" onclick="sendSubmit()">Send with your love</button>`);
}
//render thank you card if they done
function renderThanks() {
    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend',`<div class="qs_card qs_align">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M88.5151 120H31.4849C14.093 120 0 105.9 0 88.5151V31.4849C0 14.093 14.093 0 31.4849 0H88.5151C105.9 0 120 14.093 120 31.4849V88.5151C120 105.9 105.9 120 88.5151 120Z"
                      fill="#FFD0B4"/>
                <path d="M24.7444 69.0157C25.4044 64.9495 22.643 61.1181 18.5767 60.4582C14.5104 59.7983 10.6791 62.5596 10.0192 66.6259C9.35923 70.6922 12.1206 74.5235 16.1869 75.1835C20.2532 75.8434 24.0845 73.082 24.7444 69.0157Z"
                      fill="#F38DB3"/>
                <path d="M107.889 73.092C110.802 70.1792 110.802 65.4565 107.889 62.5437C104.976 59.6309 100.253 59.6309 97.3406 62.5437C94.4277 65.4565 94.4277 70.1792 97.3406 73.092C100.253 76.0048 104.976 76.0048 107.889 73.092Z"
                      fill="#F38DB3"/>
                <path d="M74.9575 69.8282C78.9582 69.8282 81.5482 74.0387 79.7685 77.6198C76.4117 84.3769 68.8226 89.0867 59.9964 89.0867C51.1702 89.0867 43.5811 84.3769 40.2243 77.6198C38.4446 74.0387 41.0346 69.8282 45.0353 69.8282H74.9575Z"
                      fill="#333333"/>
                <path d="M29.2638 53.8036C28.6272 53.2755 28.0123 52.7184 27.4335 52.1252C24.9303 49.5858 21.9352 45.4115 23.1506 41.6495C24.0911 38.7412 27.5131 37.8803 30.2478 38.0612C31.7453 38.1624 33.1995 38.5965 34.5523 39.2476C35.0298 39.4791 35.6375 39.754 36.1729 40.1013C36.6793 40.4269 37.3521 40.0796 37.381 39.4719C37.504 36.9615 38.3939 34.3426 40.6511 33.1199C43.1108 31.7888 45.8093 32.6714 47.618 34.6392C50.5263 37.8007 50.2297 42.1487 49.0287 45.983C48.1823 48.6743 47.1043 51.286 45.8166 53.7891C45.1076 55.1565 44.4999 56.6685 43.4726 57.8333C41.6712 59.8807 39.0378 59.367 36.8167 58.3686C34.1544 57.1894 31.5427 55.6846 29.2638 53.8036Z"
                      fill="#ED1C24"/>
                <path d="M90.7289 53.8036C91.3656 53.2755 91.9805 52.7184 92.5593 52.1252C95.0624 49.5858 98.0575 45.4115 96.8421 41.6495C95.9016 38.7412 92.4797 37.8803 89.745 38.0612C88.2475 38.1624 86.7933 38.5965 85.4404 39.2476C84.963 39.4791 84.3552 39.754 83.8199 40.1013C83.3135 40.4269 82.6407 40.0796 82.6117 39.4719C82.4887 36.9615 81.5989 34.3426 79.3417 33.1199C76.8819 31.7888 74.1834 32.6714 72.3748 34.6392C69.4665 37.8007 69.7631 42.1487 70.964 45.983C71.8105 48.6743 72.8884 51.286 74.1762 53.7891C74.8852 55.1565 75.4929 56.6685 76.5202 57.8333C78.3216 59.8807 80.955 59.367 83.176 58.3686C85.8383 57.1894 88.45 55.6846 90.7289 53.8036Z"
                      fill="#ED1C24"/>
            </svg>
            <div class="qs_title"><h2>Thank you</h2></div>
            <span>Cảm ơn anh/ chị/ bạn đã dành thời gian trả lời câu hỏi của chúng mình, rất mong sẽ thấy sự xuất hiện của anh/chị/bạn trong ngày trọng đại này.<br/><br/><br/>
                Tiếp tục xem ảnh cưới của chúng mình ở dưới nhé !</span>
            <a href="../index.html"><button class="qs_btn" type="button">Tiếp tục xem ảnh</button></a>
        </div>`);
}
async function writeOnSheet(data) {
    try {
        const response = await fetch('https://v1.nocodeapi.com/thvroyal/google_sheets/WnqHVCSIJNllOIdi?tabId=Sheet1', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (err) {
        console.log('err', err);
    }
}
// post API
window.sendSubmit = function() {
    dataQuestion.name = document.getElementById('question1').value;
    dataQuestion.songs = document.getElementById('question4').value;
    const data = [[dataQuestion.name, dataQuestion.isJoin, dataQuestion.withLover, dataQuestion.songs]];
    console.log(data);
    writeOnSheet(data)
        .then((res) => {
            console.log('res', res.data);
            window.localStorage.setItem('fun8232','102');
            render();
        })
        .catch(err => {
            console.log('err', err);
        })
}
//onclick icon to change data
window.selectAnswer = function(num,event) {
    switch (num) {
        case 1: {
            dataQuestion.isJoin = event.id;
            event.className += ' icon-active';
            event.nextElementSibling.classList.remove('icon-active');
            return;
        }
        case 2: {
            dataQuestion.isJoin = event.id;
            event.className += ' icon-active';
            event.previousElementSibling.classList.remove('icon-active');
            return;
        }
        case 3: {
            dataQuestion.withLover = event.id;
            event.className += ' icon-active';
            event.nextElementSibling.classList.remove('icon-active');
            return;
        }
        case 4: {
            dataQuestion.withLover = event.id;
            event.className += ' icon-active';
            event.previousElementSibling.classList.remove('icon-active');
            return;
        }
        default: return;
    }
}
// main render
function render() {
    if (window.localStorage.getItem('fun8232') === '102') renderThanks();
    else renderQuestion();
}

window.onload = render();
