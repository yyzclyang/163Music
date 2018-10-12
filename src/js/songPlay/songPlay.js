{
  let view = {
    el: '#pageWrapper',
    template: `
      <audio src="#"></audio>
      <div class="pageBackgroundCover"></div>
      <div class="page">
        <div class="logo">
          <svg class="u-svg u-svg-logosong" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 34" data-reactid="11">
            <g fill="#fff" data-reactid="12">
              <path d="m78.74 14.27h14.52v-2.27h-14.52v2.27m-1.44 1.89c-.51-.03-.915-.44-.94-.95v-8.21c-.0001-.53.411-.968.94-1h17.37c.529.032.941.47.939 1v8.22c-.023.51-.43.92-.939.95l-17.37-.001m1.44-6h14.52v-2.23h-14.52v2.23"
                data-reactid="13"></path>
              <path d="m95.49 18h-18c-.291.002-.563.139-.74.37l-1.86 2.63-1.89 2.55c-.078.108-.053.258.055.335.04.028.087.045.135.045h2.07c.165 0 .32-.078.42-.209l2.72-3.721h3.79l-6.77 9.311c-.077.113-.047.27.067.347.04.026.085.042.133.043h2c.17 0 .33-.082.43-.22l6.95-9.481h3.87l-6.78 9.32c-.077.107-.053.258.055.334.042.031.093.047.145.046h2.08c.155.003.302-.071.39-.2l6.9-9.5h2.41v5.73c0 .889-.721 1.609-1.611 1.609h-1.93c-.153.006-.296.079-.39.2l-1.27 1.76c-.083.11-.061.268.05.351.043.032.096.05.15.05h3.39c2.208 0 4-1.791 4-4v-6.761c0-.519-.42-.939-.939-.939"
                data-reactid="14"></path>
              <path d="m126.14 15h-23.852c-.139.005-.25.12-.25.26v.62c-.004.762.609 1.385 1.371 1.39.002 0 .006 0 .001 0h6.209l-5.629 10.73c-.305.539-.113 1.222.426 1.525.174.1.373.148.574.145h19c.264.004.52-.08.73-.24.398-.316.535-.863.33-1.33l-3.102-6c-.051-.119-.168-.198-.299-.199h-1.811c-.188.002-.338.156-.336.344 0 .043.001.086.025.126l2.68 5h-15.439l5.381-10.18h13c.658-.019 1.193-.534 1.24-1.19v-.73c0-.144-.117-.26-.26-.26"
                data-reactid="15"></path>
              <path d="m105.42 9.44h17.641c.725-.005 1.309-.595 1.309-1.32v-.66c0-.156-.123-.285-.279-.29h-19.721c-.166 0-.299.134-.299.3 0 .003 0 .007 0 .001v.6c-.006.746.594 1.354 1.34 1.36.0001 0 .005 0 .009 0"
                data-reactid="16"></path>
              <path d="m66.69 6.33h-21.34c-.646 0-1.17.524-1.17 1.17 0 .003 0 .007 0 .001v22c0 .149.121.27.27.27h1.81c.149 0 .27-.12.27-.27v-20.82h19v17.12c0 .889-.721 1.609-1.61 1.609h-1.31c-.153-.002-.297.068-.39.189l-1.33 1.841c-.066.089-.048.214.04.28.034.025.077.039.12.039h2.85c2.159.002 3.93-1.711 4-3.869v-18.39c0-.652-.528-1.18-1.18-1.18"
                data-reactid="17"></path>
              <path d="m61.43 24.63h2.08c.127-.0001.229-.104.228-.231 0-.038-.001-.075-.028-.108l-3.56-6.24 3.56-6.23c.066-.108.032-.25-.076-.316-.037-.023-.08-.035-.124-.034h-2.08c-.083.002-.159.048-.2.12l-2.38 4.17-2.39-4.17c-.042-.072-.117-.117-.2-.12h-2.08c-.127-.002-.232.099-.234.226-.0001.043.011.086.034.124l3.56 6.23-3.54 6.239c-.061.111-.02.251.092.312.033.019.07.028.108.028h2.08c.082.0001.158-.04.2-.11l2.39-4.18 2.38 4.18c.042.07.119.111.2.11"
                data-reactid="18"></path>
              <path d="m54.47 18.15c.045-.074.045-.166 0-.24l-3.61-6.32c-.046-.072-.125-.117-.21-.12h-2.1c-.127-.002-.231.099-.234.226 0 .043.011.086.034.124l3.56 6.18-3.58 6.26c-.061.111-.02.252.092.313.033.018.07.027.108.027h2.1c.084.002.163-.04.21-.109l3.62-6.35"
                data-reactid="19"></path>
              <path d="m145.37 13.89h-4.91l-2.539-4.45h10l-2.551 4.45m9.43 0h-6.799l2.539-4.45h1.41c.752 0 1.361-.609 1.361-1.36v-.64c0-.145-.115-.265-.262-.27h-8.729l-1.061-1.84c-.096-.175-.281-.283-.48-.28h-1.859c-.133-.007-.246.095-.252.228-.002.046.008.092.031.133l1 1.76h-8.859c-.152.005-.275.127-.279.28v.63c0 .751.607 1.36 1.359 1.36h1.42l2.539 4.45h-6.878c-.166 0-.301.134-.301.3v.62c0 .746.605 1.35 1.35 1.35h21.701c.729 0 1.32-.591 1.32-1.32v-.65c-.004-.154-.119-.281-.271-.301"
                data-reactid="20"></path>
              <path d="m151.12 18c.625 0 1.131.506 1.131 1.13v9.47c0 .625-.506 1.131-1.131 1.131h-16.42c-.621-.006-1.125-.509-1.129-1.131v-9.47c.004-.622.508-1.124 1.129-1.13h16.42m-1.219 4.2v-2.11h-14v2.73h14v-.62m-14 5.441h14v-2.73h-14v2.73"
                data-reactid="21"></path>
              <path d="m183.13 16.64v-.64c0-.132-.107-.24-.238-.24h-9.521v-4.91c-.004-.146-.125-.26-.27-.26h-.74c-.746-.005-1.354.595-1.359 1.34 0 .003 0 .006 0 .001v3.8h-7.85l.849-5.93c6.689-.32 13.51-1.13 16.289-1.49.707-.087 1.211-.73 1.123-1.438 0-.007-.002-.015-.002-.022l-.1-.73c-.016-.121-.127-.206-.246-.19-.002 0-.004 0-.004 0-1.48.2-10 1.32-18.12 1.65-.555.025-1.012.448-1.08 1l-1.049 8.15c-.072.62.371 1.181.99 1.253.029.003.059.006.09.007h9.11v7.76c0 .891-.719 1.615-1.609 1.62h-.391c-.166-.003-.322.076-.42.21l-1.23 1.7c-.088.127-.057.302.07.39.043.031.096.049.15.051h1.84c2.209 0 4-1.791 4-4v-7.731h8.41c.744 0 1.35-.604 1.35-1.35 0-.003 0-.006 0-.001"
                data-reactid="22"></path>
              <path d="m167.05 20.09h-1.649c-.457 0-.881.229-1.131.61-1.129 1.75-2.73 4.88-4.301 7.38-.094.15-.047.348.102.441.051.031.109.049.17.049h1.5c.453.004.877-.227 1.119-.61 1.781-2.819 3.439-5.91 4.391-7.51.066-.114.027-.262-.088-.328-.035-.02-.072-.03-.113-.032"
                data-reactid="23"></path>
              <path d="m183.82 28.08c-1.57-2.5-3.16-5.63-4.301-7.38-.246-.38-.668-.608-1.119-.61h-1.65c-.127-.006-.234.093-.24.219-.002.051.012.1.039.142.951 1.61 2.611 4.69 4.381 7.51.244.387.672.618 1.131.61h1.5c.17.004.313-.131.316-.303.002-.067-.018-.133-.057-.188"
                data-reactid="24"></path>
            </g>
            <path fill="#dd001b" d="M26.26,0H7.74C3.47,0.011,0.011,3.47,0,7.74v18.52C0.011,30.53,3.47,33.988,7.74,34h18.52 c4.271-0.012,7.729-3.47,7.74-7.74V7.74C33.989,3.47,30.53,0.011,26.26,0"
              data-reactid="25"></path>
            <path fill="#fff" d="m19.13 19.08c-.297.389-.716.667-1.19.79-.684.202-1.422.077-2-.341-.695-.498-1.137-1.277-1.21-2.129-.041-.43 0-.865.12-1.28.398-1.294 1.373-2.332 2.64-2.81.322-.135.657-.236 1-.3.14.49.28 1 .43 1.51.19.68.39 1.36.55 2 .274.877.13 1.832-.39 2.589m1.32-8.659c-.09-.36-.23-.9-.34-1.3-.085-.308-.085-.632 0-.94.021-.084.055-.166.1-.24.187-.34.518-.575.9-.64.356-.048.716.049 1 .27.144.122.281.252.41.39.229.219.534.34.85.34.696.012 1.27-.542 1.282-1.238 0-.031 0-.062-.0001-.092.0001-.199-.047-.395-.14-.57-.15-.234-.336-.443-.55-.62-.414-.364-.898-.639-1.421-.81-.237-.077-.482-.131-.73-.16-.549-.067-1.105-.012-1.63.16-1.962.59-3.075 2.659-2.485 4.621.014.046.029.093.045.139 0 .21.16.6.21.8-.443.091-.877.219-1.3.38-2 .777-3.533 2.428-4.16 4.48-.191.71-.259 1.447-.2 2.18.136 1.604.97 3.066 2.28 4 2.122 1.465 5.02 1.027 6.61-1 1-1.354 1.326-3.096.87-4.72-.17-.65-.37-1.36-.57-2.06l-.21-.75c.847.217 1.626.639 2.27 1.23 2.236 2.188 2.652 5.634 1 8.29-1.592 2.416-4.296 3.864-7.19 3.85-4.926-.001-8.915-4-8.92-8.93-.0001-.438.032-.876.1-1.31.055-.337.128-.671.22-1 .1-.34.21-.67.34-1 .137-.318.291-.628.46-.93.164-.302.348-.592.55-.87.203-.278.419-.545.65-.8.232-.252.479-.489.74-.71.25-.22.53-.43.81-.63.284-.192.578-.369.88-.53.17-.08.34-.17.51-.24l.28-.12c.654-.273.963-1.026.69-1.68s-1.026-.963-1.68-.69l-.36.15-.66.32c-.392.201-.769.429-1.13.68-.347.249-.681.516-1 .8-.33.289-.644.596-.94.92-.3.313-.578.647-.83 1-.276.36-.53.738-.76 1.13-.217.39-.414.791-.59 1.2-.169.414-.313.838-.43 1.27-.126.439-.223.887-.29 1.34-.088.559-.131 1.124-.13 1.69-.028 6.324 5.076 11.473 11.4 11.5.001 0 .02 0 .03 0 3.753.001 7.26-1.869 9.33-5 2.308-3.669 1.714-8.456-1.42-11.45-1.291-1.192-2.947-1.915-4.7-2.05"
              data-reactid="26"></path>
          </svg>
        </div>
        <div class="record">
          <img class="pointer" src="./img/pointer.png" alt="">
          <div class="discWrapper">
            <img class="disc" src="./img/disc.png" alt="">
            <img class="discLight" src="./img/discLight.png" alt="">
            <img class="songCover" src="" onerror="onerror=null;src='./img/discDefault.png'" alt="cover">
            <div class="icon active"></div>
          </div>
        </div>
        <div class="songInfo">
          <div class="songTitle">
            <span class="songName">name</span>
            <span class="songGap">-</span>
            <span class="singer"></span>
          </div>
          <div class="lyrics">
            <div class="lines">
            </div>
          </div>
        </div>
      </div>
      <div class="linkWrapper">
        <div class="link">
          <a href="#">
            <div class="open">打 开</div>
          </a>
          <a href="#">
            <div class="down">下 载</div>
          </a>
        </div>
      </div>
    `,
    render(data) {
      let { song, status } = data;
      $(this.el).html(this.template);
      if (
        $(this.el)
          .find('audio')
          .attr('src') !== song.url
      ) {
        $(this.el)
          .find('audio')
          .attr('src', song.url);
        $(this.el).find('audio')[0].onended = () => {
          window.eventHub.trigger('songEnd');
        };
        $(this.el).find('audio')[0].ontimeupdate = () => {
          this.showLyrics($(this.el).find('audio')[0].currentTime, song);
        };
      }
      $(this.el)
        .find('.songTitle > .songName')
        .html(song.name);
      $(this.el)
        .find('.songTitle > .singer')
        .html(song.singer);
      $(this.el)
        .find('.discWrapper > .songCover')
        .attr('src', song.cover);
      $(this.el)
        .find('.pageBackgroundCover')
        .css('background-image', `url(${song.cover})`);

      let { lyrics } = song;
      if (lyrics) {
        let lyricsArr = lyrics.split('\n');
        lyricsArr.map(string => {
          string = string.split('[')[1].split(']');
          let lyric = string[1];
          let lyricTimeArr = string[0].split(':');
          let lyricTime =
            parseInt(lyricTimeArr[0], 10) * 60 +
            parseFloat(lyricTimeArr[1], 10);
          let lyricsP = $(
            `<p class="line" data-time="${lyricTime}">${lyric}</p>`
          );
          $(this.el)
            .find('.lyrics > .lines')
            .append(lyricsP);
        });
      }
    },
    playing() {
      $(this.el)
        .find('audio')[0]
        .play();
      $(this.el)
        .find('.record')
        .addClass('playing');
      $(this.el)
        .find('.icon')
        .removeClass('active');
    },
    pause() {
      $(this.el)
        .find('audio')[0]
        .pause();
      $(this.el)
        .find('.record')
        .removeClass('playing');
      $(this.el)
        .find('.icon')
        .addClass('active');
    },
    changePlayStatus(playStatus) {
      if (playStatus === 'playing') {
        this.playing();
      } else {
        this.pause();
      }
    },
    showLyrics(songCurrentTime, { lyrics }) {
      if (!lyrics) {
        return;
      }
      let lyricsArr = lyrics.split('\n');
      let lyricTime = [];
      let index = 0;
      lyricsArr.map(string => {
        let lyricTimeArr = string
          .split('[')[1]
          .split(']')[0]
          .split(':');
        lyricTime[index++] =
          parseInt(lyricTimeArr[0], 10) * 60 + parseFloat(lyricTimeArr[1], 10);
      });
      let currentPNum;

      for (let i = 0; i < lyricTime.length; i++) {
        if (i === lyricTime.length - 1) {
          currentPNum = i;
          break;
        } else if (songCurrentTime < lyricTime[0]) {
          currentPNum = 0;
          break;
        } else if (
          songCurrentTime >= lyricTime[i] &&
          songCurrentTime <= lyricTime[i + 1]
        ) {
          currentPNum = i;
          break;
        }
      }

      let currentP = $(this.el).find('.lines > p')[currentPNum];

      let linesTop = $(this.el)
        .find('.lines')[0]
        .getBoundingClientRect().top;
      let currentPTop = currentP.getBoundingClientRect().top;
      let currentpHeight = 0;
      if (currentPNum > 0) {
        currentpHeight = $(this.el)
          .find('.lines > p')
          [currentPNum - 1].getBoundingClientRect().height;
      }
      let moveHeight = currentPTop - linesTop - currentpHeight;
      if (moveHeight < 0) {
        moveHeight = 0;
      }
      $(this.el)
        .find('.lyrics > .lines')
        .css({ transform: `translateY(${-moveHeight}px)` });
      $(currentP)
        .addClass('active')
        .siblings()
        .removeClass('active');
    }
  };
  let model = {
    data: {
      song: {
        id: '',
        name: '',
        singer: '',
        url: '',
        lyrics: ''
      },
      status: 'playing'
    },
    setSongId(songId) {
      this.data.song.id = songId;
    },
    getSong(songId) {
      let query = new AV.Query('Song');
      return query.get(songId).then(
        song => {
          // 成功获得实例
          Object.assign(this.data.song, { id: songId, ...song.attributes });
          return song;
        },
        error => {
          // 异常处理
        }
      );
    }
  };
  let controller = {
    init(view, model) {
      this.view = view;
      this.model = model;
      this.bindEvents();
      this, this.bindEventHub();
      this.getSongId();
      this.model.getSong(this.model.data.song.id).then(data => {
        this.view.render(this.model.data);
        this.model.data.status = 'playing';
        this.view.changePlayStatus(this.model.data.status);
      });
    },
    bindEvents() {
      $(this.view.el).on('click', '.page', () => {
        if (this.model.data.status === 'playing') {
          this.model.data.status = 'pause';
        } else {
          this.model.data.status = 'playing';
        }
        this.view.changePlayStatus(this.model.data.status);
      });
    },
    bindEventHub() {
      window.eventHub.on('songEnd', () => {
        this.view.pause();
      });
    },
    getSongId() {
      let search = window.location.search;
      if (search.indexOf('?') === 0) {
        search = search.substring(1);
      }
      let searchArray = search.split('&').filter(v => v);
      let songId = '';
      searchArray.map(searchString => {
        let k_v = searchString.split('=');
        let key = k_v[0];
        let value = k_v[1];
        if (key === 'id') {
          songId = value;
        }
      });
      this.model.setSongId(songId);
    }
  };
  controller.init(view, model);
}
