<template>
    <div>
      <TitlePage title="My Messages"/>
        <body> 
          <div id="content-container" class="flex flex-col justify-center px-10">
            <div class="heading-container">
            </div>
            <div
              id="notification-container"
              class="flex flex-col justify-start"
            >
              <div id="messages-card" class="overflow-hidden md:ml-[240px]">
                <div class="flex">
                  <div class="text-2xl font-bold mb-3">
                    Chats
                  </div>
                </div>
                    <div class="w-full">
                        <div>
                            <div 
                                class="
                                    w-[calc(100vw-50rem)]
                                    bg-[#F0F0F0] 
                                    z-10 
                                    min-w-[30rem] 
                                    flex 
                                    justify-between 
                                    items-center 
                                    px-2 
                                    py-2
                                    message-header
                                "
                            >
                                <div class="flex items-center">
                                    <img 
                                        class="rounded-full mx-1 w-10" src="~/assets/profile-picture.png" 
                                    >
                                    <div 
                                    class="text-gray-900 ml-1 font-semibold">
                                    Kristen Velazquez (Supervisor)
                                    </div>
                                    <div class="dropdown">
                                        <a class="dropbtn">Chats</a>
                                        <div class="dropdown-content">
                                            <a href="#link1">Supervisor</a>
                                            <a href="#link2">Summer Camp Group</a>
                                            <a href="#link3">Literacy Group</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ml w-full">
                        </div>
                        <div 
                        id="messages-section"
                        class="
                            pb-8 
                            h-[calc(100vh-40rem)]
                            w-[calc(100vw-50rem)]
                            overflow-scroll
                            touch-auto
                            min-h-[22rem]
                        "
                        >
                        <div class="text-box text-sm">
                          <div>
                              <div class="flex w-100%">
                                  <div class="inline-block bg-blue-200 p-2 rounded-md my-1 blue-box">
                                      Hi Robert!
                                  </div>
                              </div>
                              <div id="green-texts" class="flex justify-end space-x-1 float-right block">
                                  <div class="block bg-green-200 p-2 rounded-md my-1 green-box">
                                      Hey Kristen!
                                  </div>
                              </div>
                          </div>
                        </div>

                        </div>
                        
                        <div class="w-[calc(100vw-50rem)] p-2.5 z-10 bg-[#F0F0F0] bottom-0 min-w-[30rem] input-box-container">
                          
                            <div class="flex items-center justify-center input-box">
                                <input
                                
                                id = 'message-input' 
                                v-model="greenBoxText"
                                class="
                                    mr-1
                                    shadow
                                    apperance-none
                                    rounded-lg
                                    w-[calc(100vw-20rem)]
                                    py-3
                                    px-4
                                    text-gray-700
                                    leading-tight
                                    focus:outline-none 
                                    focus:shadow-outline
                                    input
                                "
                                autocomplete="off"
                                type="text"
                                placeholder="Write a Message"
                                @keydown.enter="addGreenText"
                                >
                                <button 
                                    id="sendbtn" class="ml-3 p-2 w-12 flex items-center justify-center" 
                                    @click="addGreenText"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </body>
    </div>
</template>

<script>
export default {
  data() {
    return {
      greenBoxText: ''
    };
  },
  methods: {
    addGreenText() {
      if (this.greenBoxText !== '') {
        const parent = document.getElementById("green-texts");
        const greenText = document.createElement("div");
        greenText.classList.add("block", "bg-green-200", "p-2", "rounded-md", "my-1", "green-box");
        // greenText.innerHTML = this.greenBoxText.replace(/(.{30})/g, "$1<br>");
        greenText.innerHTML = this.greenBoxText.replace(/(\S{15})(?=\S)/g, "$1<br>");
        // greenText.innerText = this.greenBoxText
        this.greenBoxText = ''
        parent.appendChild(greenText);
        document.getElementById("message-input").value = "";
        const messagesSection = document.getElementById("messages-section");
        messagesSection.scrollTop = messagesSection.scrollHeight;
      }
    }
  }
};
</script>

<style>

.text-box {
    max-height: calc(100vh-40rem);
  }

#background {
    width: 100%;
    height: 100%;
    z-index: -1;
}

#messages-card {
      display: flex;
      flex-direction: column;
      color: #00565a;
      margin-bottom: 0.8rem;
      padding: 1em;
      background-color: #fff;
      border-radius: 25px 0 0 0;
      box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
      min-width: 5rem;
      overflow-y: hidden;
      margin-top: 3rem;
      width: fit-content;
    }


#chat-container {
    float: left;
}

.text-box {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
}

#content-container {
    min-width: 30rem;
}

.dropdown {
    overflow: hidden;
  }

.dropbtn::after{
  content: "\0025BC";
  transition: 0.2s;
  position: absolute;
  padding: 2px 4px 0px 4px;
}

.dropbtn::after:hover{
  transform: rotate(-180deg);
}

.dropdown:hover .dropbtn::after{
  transform: rotate(-180deg);
}

.dropdown .dropbtn {
  font-size: 17px;
  color: black;
  padding: 14px 32px 14px 16px;
  background-color: inherit;
  font-family: inherit; 
  margin: 0; 
  display: inline-block;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

#green-texts {
    flex-direction: column;
    max-width: 50%;

}

.blue-box {
  background-color: rgb(191 219 254);
}


.green-box {
  background-color: rgb(134 239 172);
}

#sendbtn:hover{
  background-color: rgb(134, 239, 172);
  border-radius: 3px 3px 3px 3px;
}

@media only screen and (max-width: 1272px) {
  .text-box {
    width: 30rem;
  }

  .blue-box {
    float: left;
  }
  
  .green-box {
    float: right;
  }

  #green-texts {
    margin-right: 0;

}
  #messages-section {
    width: 100vw;
  }

  #messages-card {
    max-width: 32rem;
  }

}


@media only screen and (max-width: 890px) {

  #messages-card {
    width: 25rem;
  }
  
  .text-box {
    position: flex;
    width: 24rem;
    justify-content: center;
    align-items: center;

   }

  .blue-box {
    float: left;
    z-index: 0;
  }
  
  .green-box {
    float: right;

  }

  .input-box {
    width: 21rem;
    min-width: 23rem;
  }
  .message-header {
    width: 10rem;
    min-width: 23rem;
  }

  .input {
    width: 15rem;
  }

  .input-box-container {
    min-width: 23rem;
  }
  #messages-section {
    width: fit-content;
  }
}

</style>

