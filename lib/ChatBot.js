<html>

    <head>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    </head>

    <body>
      <div>
       請輸入問題：
       <input id="say" name="say" type="text" value="" size="80" onkeydown="keyin(event)"/> 
       <input type="submit" id="bt1" value="送出" onclick="say()"/> 
       <!-- <input type="submit" value="clear" onclick="clsData()"> -->
      </div>
      <BR/>
      <div id="dialogBox" style="width:95%; height:80%; overflow:auto; border:ridge 1px #888888; ">
    >> 安安:) 有心事嗎?<BR/>  
      </div>

      <script type="text/javascript">  

    // Q&A 陣列宣告
    var qaList = [
    { Q:"謝謝", A:"不客氣!"},
    { Q:"對不起 | 抱歉 | 不好意思", A:"別說抱歉 !|別客氣，9儘管說 !"},
    { Q:"可否 | 可不可以", A:"你確定想*?"},
    { Q:"我想", A:"你為何想*?"},
    { Q:"我要", A:"你為何要*?"},
    { Q:"你是", A:"你認為我是*?"},
    { Q:"認為 | 以為", A:"為何說*?"},
    { Q:"感覺", A:"常有這種感覺嗎?"},
    { Q:"為何不", A:"你希望我*!"},
    { Q:"是否", A:"為何想知道是否*?"},
    { Q:"不能", A:"為何不能*?|你試過了嗎?|或許你現在能*了呢?"},
    { Q:"我是", A:"你好，久仰久仰!"},
    { Q:"甚麼 | 什麼 | 何時 | 誰 | 哪裡 | 如何 | 為何 | 因何", A:"為何這樣問?|為何你對這問題有興趣?|你認為答案是甚麼呢?|你認為如何呢?|你常問這類問題嗎?|這真的是你想知道的嗎?|為何不問問別人?|你曾有過類似的問題嗎?|你問這問題的原因是甚麼呢?"},
    { Q:"原因", A:"這是真正的原因嗎?|還有其他原因嗎?"}, 
    { Q:"理由", A:"這說明了甚麼呢?|還有其他理由嗎?"},
    { Q:"你好 | 嗨 | 您好", A:"你好，有甚麼問題嗎?"},
    { Q:"或許", A:"你好像不太確定?"},
    { Q:"不曉得 | 不知道", A:"為何不知道?|在想想看，有沒有甚麼可能性?"},
    { Q:"不想 | 不希望", A:"有沒有甚麼辦法呢?|為何不想*呢?|那你希望怎樣呢?"}, 
    { Q:"想 | 希望", A:"為何想*呢?|真的想*?|那就去做阿?為何不呢?"},
    { Q:"不", A:"為何不*?|所以你不*?"},
    { Q:"請", A:"我該如何*呢?|你想要我*嗎?"},
    { Q:"你", A:"你真的是在說我嗎?|別說我了，談談你吧!|為何這麼關心我*?|不要再說我了，談談你吧!|你自己*"},
    { Q:"總是 | 常常", A:"能不能具體說明呢?|何時?"},
    { Q:"像", A:"有多像?|哪裡像?"},
    { Q:"對", A:"你確定嗎?|我了解!"},
    { Q:"朋友", A:"多告訴我一些有關他的事吧!|你認識他多久了呢?"},
    { Q:"電腦", A:"你說的電腦是指我嗎?"}, 
    { Q:"難過", A:"別想它了|別難過|別想那麼多了|事情總是會解決的"},
    { Q:"高興", A:"不錯ㄚ|太棒了|這樣很好ㄚ"},
    { Q:"是阿|是的", A:"甚麼事呢?|我可以幫助你嗎?|我希望我能幫得上忙!"},
    { Q:"", A:"我了解|我能理解|還有問題嗎 ?|請繼續說下去|可以說的更詳細一點嗎?|這樣喔! 我知道!|然後呢? 發生甚麼事?|再來呢? 可以多說一些嗎|接下來呢? |可以多告訴我一些嗎?|多談談有關你的事，好嗎?|想多聊一聊嗎|可否多告訴我一些呢?"}
    ];  

        // document.getElementById('bt1').addEventListener('click', clsData)

        function clsData() {
          var x = document.getElementById("say")
          x.value = ''
        }
    
        function random(n) { 
          return Math.floor(Math.random()*n);
        }
    
        function say() { 
          append(document.getElementById("say").value); 
          answer(); 
          clsData()
        }
    
        function keyin(event) { 
          var keyCode = event.which; 
          if (keyCode == 13) say(); 
        }
    
        function append(line) { 
          var dialogBox = document.getElementById("dialogBox");  
          dialogBox.innerHTML += line+"<BR/>\n"; 
          dialogBox.scrollTop = dialogBox.scrollHeight; 
        }
    
        function answer() { 
          setTimeout(function () { 
            append(">> "+getAnswer());
          }, 1000+random(2000));
        }
    
        function getAnswer() {
          var say = document.getElementById("say").value; 
          for (var i in qaList) { 
           try {
            var qa = qaList[i];
            var qList = qa.Q.split("|"); 
            var aList = qa.A.split("|"); 
            for (var qi in qList) { 
              var q = qList[qi];
              if (q=="") 
                return aList[random(aList.length)]; 
              var r = new RegExp("(.*)"+q+"([^?.;]*)", "gi"); 
              if (say.match(r)) { 
                tail = RegExp.$2; 
                tail = tail.replace("我", "#").replace("你", "我").replace("#", "你");
                return aList[random(aList.length)].replace(/\*/, tail); 
              }
            }
           } catch (err) {}
          }
          return "然後呢？"; 
        }   
      </script>
    </body>

    </html>