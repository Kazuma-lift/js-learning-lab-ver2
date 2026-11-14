const codeCatalog = [
  {
    name: 'const',
    kind: 'JavaScript',
    reading: 'コンスト。定数の宣言として、こう呼ばれることが多いです。',
    officialName: '定数。同じ変数に別の値を入れ直せない宣言です。',
    summary: 'データに名前を付け、その変数には別の値を入れ直さない書き方です。',
    purpose: [
      '同じデータを何度も使うとき、その場に値を書き直さず、名前で指せるようにします。',
      '同じ変数に、あとから別の値を入れ直さない、と決めておくと、途中で別のデータにすり替わった見落としを減らせます。中の数字や並びの中身を変えることまでは止めません。',
      'このじゃんけんでは、手の並び hands と、勝ち・負け・引き分けの回数 scores に使っています。scores という名前は入れ替えません。増やすのは scores.win のような中の数字です。',
    ],
    usage: 'const 名前 = 最初の値 と書きます。const は「この変数には別の値を入れ直さない」という印、名前はそのデータの呼び名、= は右の値をその名前に結び付ける記号です。',
    example: "const hands = ['グー', 'チョキ', 'パー'];\nconst scores = {\n  win: 0,\n  lose: 0,\n  draw: 0,\n};",
    walkthrough: [
      { part: 'const', text: 'この変数には、あとから別の値を入れ直さない、という宣言です。' },
      { part: 'hands', text: '手の並びにつけた名前です。' },
      { part: '=', text: '右に書いた値を、左の名前に結び付けます。比べる記号ではありません。' },
      { part: "['グー', 'チョキ', 'パー']", text: '三つの手を、この順番で一つにまとめた値です。' },
      { part: 'scores', text: '勝ち数、負け数、引き分け数をまとめたデータにつけた名前です。' },
    ],
    result: [
      'このあと hands と書けば、グー、チョキ、パーの並びを指します。',
      'scores.win += 1 は、scores という名前はそのままに、中の win を 0 から 1 に変えます。これはできます。',
      '説明用の例です。scores = 別のデータ と書いて、同じ変数に別の値を入れ直すことは、const ではできません。',
    ],
    similar: [
      {
        name: 'let',
        text: 'どちらもデータに名前を付けます。let は、あとから同じ変数に別の値を入れ直せます。このじゃんけんの手やスコアでは、入れ直さないので const を使っています。',
      },
    ],
    related: [
      {
        name: '[] と {}',
        text: 'const は名前を付ける役です。[] が手の並び、{} が回数のまとまりです。',
      },
    ],
    alternatives: [
      {
        name: 'let hands = ...',
        text: '同じ変数に、あとで別の値を入れ直す必要があるときだけ let にします。このアプリの hands と scores は入れ直さないので、const のままにしています。',
      },
    ],
  },
  {
    name: 'function',
    kind: 'JavaScript',
    reading: 'ファンクション。関数として広くこう呼ばれます。',
    officialName: '関数。一連の作業に名前を付けたものです。',
    summary: '一連の作業に名前を付け、必要なときにその名前で実行できるようにします。作っただけでは中の作業は動きません。',
    purpose: [
      '同じ手順を、ボタンを押した場所など、別の場所から何度でも呼べるようにします。',
      '手順を名前で分けておくと、勝敗の判定と点数の加算を混ぜずに読めます。名前を付けずに、その場へ手順を全部書くこともできます。',
      'このじゃんけんでは、手を受け取る getPlayerHand、CPU の手を決める decideCpuHand、勝敗を決める judge、点数を増やす updateScore、点数を 0 に戻す resetScore として使っています。',
    ],
    usage: 'function 名前(仮引数) { 作業 } と書くと、作業の準備ができます。あとから 名前(実引数) と書くと、そのとき初めて中の作業が実行されます。定義するときの () の中の名前は仮引数です。関数を実行するときに渡した値を受け取る名前です。実行するときの () の中の値は実引数です。渡す値がなければ () は空にします。',
    example: "function judge(playerHand, cpuHand) {\n  if (playerHand === cpuHand) {\n    return '引き分け';\n  }\n  if (\n    (playerHand === 'グー' && cpuHand === 'チョキ') ||\n    (playerHand === 'チョキ' && cpuHand === 'パー') ||\n    (playerHand === 'パー' && cpuHand === 'グー')\n  ) {\n    return '勝ち';\n  }\n  return '負け';\n}\n\nconst result = judge(playerHand, cpu.cpuHand);",
    walkthrough: [
      { part: 'function', text: 'ここから関数を作る、という印です。この行だけではまだ実行されません。' },
      { part: 'judge', text: 'この関数につけた名前です。' },
      { part: 'playerHand, cpuHand', text: '仮引数です。関数を実行するときに渡した値を受け取る名前です。' },
      { part: '{ }', text: '実行したい作業の範囲です。' },
      { part: 'playerHand === cpuHand', text: '二つの手が同じ文字列なら true です。そのとき「引き分け」を返して、judge の残りは実行しません。' },
      { part: "(playerHand === 'グー' && cpuHand === 'チョキ')", text: 'あなたがグーで CPU がチョキなら true です。続く二つの組も、同じ if の中で || でつながっています。どれか一つでも true なら「勝ち」を返して judge を終えます。' },
      { part: "return '負け'", text: '引き分けでも勝ちでもないときに「負け」を返して、judge を終えます。' },
      { part: 'judge(playerHand, cpu.cpuHand)', text: '作った judge を実行しています。() の中が実引数で、今のあなたの手と CPU の手です。' },
      { part: 'const result', text: 'judge から返ってきた「勝ち」「負け」「引き分け」のいずれかを、result という名前で覚えています。' },
    ],
    result: [
      'function judge(...) { } を読み終えた時点では、勝敗はまだ決まっていません。',
      'あなたの手がグー、CPU の手がグーなら、result は「引き分け」です。勝ちの if と return \'負け\' は実行されません。',
      'あなたの手がグー、CPU の手がチョキなら、result は「勝ち」です。',
      'あなたの手がグー、CPU の手がパーなら、三つの勝ちの組には当てはまらず、result は「負け」です。',
    ],
    similar: [
      {
        name: '名前のない function () { }',
        text: 'どちらも作業をまとめます。judge は名前があるので、別の場所から何度でも呼べます。.filter() の中の function () { } は名前がなく、その場でボタンを一つずつ調べるためだけに使っています。',
      },
    ],
    related: [
      {
        name: 'return',
        text: '関数が結果を呼んだ場所へ渡すとき、return を使います。点数を直接書き換える updateScore は、結果の文字を返していません。',
      },
    ],
    alternatives: [
      {
        name: 'ボタンを押した場所に手順を全部書く',
        text: '同じ勝敗判定を、クリックされた場所へ直接書くこともできます。手順が長くなるので、このアプリでは judge という名前に分けています。',
      },
    ],
  },
  {
    name: 'if / else',
    kind: 'JavaScript',
    reading: 'イフ / エルス。条件分岐としてこう呼ばれます。',
    officialName: '条件分岐。if 文と else 節です。',
    summary: '条件を調べた結果が true のときと、true にならないときで、実行する作業を分けます。',
    purpose: [
      '値によって、次にやることが変わるときに使います。',
      'すべての手順をいつも実行すると、勝ちなのに負けの点数も増えてしまいます。条件で分けると、必要な作業だけ実行できます。',
      'このじゃんけんでは、手が同じなら「引き分け」を返し、勝ちの組み合わせなら「勝ち」を返します。点数は、結果が「勝ち」なら勝ち数、「負け」なら負け数、それ以外は引き分け数を 1 増やします。',
    ],
    usage: 'if (条件) { 結果が true のときの作業 } else { true にならないときの作業 } と書きます。() の中は true か false になる式、{ } の中がそのときに実行する作業です。else if を足すと、三つの場合に分けられます。else は必ず要るわけではありません。',
    example: "if (result === '勝ち') {\n  scores.win += 1;\n} else if (result === '負け') {\n  scores.lose += 1;\n} else {\n  scores.draw += 1;\n}",
    walkthrough: [
      { part: 'if', text: '最初の条件を調べる印です。' },
      { part: "result === '勝ち'", text: 'result が勝ちという文字と完全に同じなら true、違えば false です。' },
      { part: 'scores.win += 1', text: '条件が true のときだけ、勝ち数に 1 を足します。' },
      { part: 'else if', text: '最初の条件が false のとき、次の条件を調べます。' },
      { part: 'else', text: '上のどの条件にも当てはまらなかったときの作業です。ここでは引き分け数を増やします。' },
    ],
    result: [
      'result が「勝ち」なら、scores.win だけが 1 増えます。負け数と引き分け数は変わりません。',
      'result が「負け」なら scores.lose だけ、「引き分け」なら scores.draw だけが 1 増えます。',
    ],
    similar: [
      {
        name: '条件を一文で書く書き方',
        text: '短い条件なら、一行で値を選ぶ書き方もあります。このじゃんけんの勝敗と点数は、作業が分かれて読める if / else にしています。',
      },
    ],
    related: [
      {
        name: '=== と && / ||',
        text: 'if の () の中で、同じかどうかは ===、勝ちの組み合わせは && と || で表しています。',
      },
    ],
    alternatives: [
      {
        name: 'else を書かず return で終える',
        text: 'judge は、引き分けと勝ちを return で返したあと、残った場合に return \'負け\' と書いています。else を使わなくても、先に終わらせることで場合分けできます。',
      },
    ],
  },
  {
    name: 'return',
    kind: 'JavaScript',
    reading: 'リターン',
    officialName: 'return文。関数の処理を終了し、必要に応じて値を返す命令です。',
    summary: '関数の処理をそこで終了し、必要に応じて結果を呼び出し元に渡す命令です。',
    summaryMore: [
      'return には2つの役割があります。',
      '1. 関数の処理をそこで終了する。',
      '2. 関数を呼び出した場所に結果を返す。',
    ],
    purpose: [
      '主に次の2つの目的で使用します。',
      '① 関数の計算結果を別の処理で利用するため',
      '例えば、次のコードです。',
      {
        code: "function judge() {\n  return '勝ち';\n}\n\nconst result = judge();",
      },
      '処理の流れは以下のとおりです。',
      '1. judge()を呼び出す。',
      "2. return '勝ち'; が実行される。",
      '3. 呼び出した場所に「勝ち」が返される。',
      '4. 変数resultに「勝ち」が代入される。',
      'つまり、return は関数で求めた結果を、別の場所で利用できるようにする役割があります。',
      '② 不要な処理を実行させないため',
      '例えば、次のコードです。',
      {
        code: "function onHandClick(hand) {\n  if (!hands.includes(hand)) {\n    return;\n  }\n\n  console.log('じゃんけん開始');\n}",
      },
      '想定外の手が渡された場合、return; によって関数が終了します。',
      "そのため、console.log('じゃんけん開始'); は実行されません。",
    ],
    usage: [
      '関数の { } の中で使用します。',
      '値を返す場合',
      { code: "return '勝ち';" },
      '処理を終了するだけの場合',
      { code: 'return;' },
      'どちらも、実行された時点でその関数の残りの処理は実行されません。',
      '補足：undefinedとは？',
      'undefinedは、JavaScriptで「値が定義されていない」ことを表す特別な値です。',
      '例えば、次のコードです。',
      {
        code: "function getResult() {\n  return;\n}\n\nconst result = getResult();\nconsole.log(result);",
      },
      'この場合、コンソールにはundefinedと表示されます。',
      '理由は、return; で関数を終了したものの、返す値を指定していないためです。',
      'return を書かずに関数の最後まで実行した場合も、通常はundefinedが返されます。',
      'ただし、じゃんけんアプリのonHandClick関数では、この戻り値を利用していません。',
      'そのため、このアプリでは「return; は処理を途中で終了する命令」と理解すれば十分です。',
    ],
    exampleIntro: 'じゃんけんアプリでは、主に2つの使い方があります。',
    examples: [
      {
        title: '① 勝敗の結果を返す（judge関数）',
        code: "if (playerHand === cpuHand) {\n  return '引き分け';\n}\n\nif (\n  (playerHand === 'グー' && cpuHand === 'チョキ') ||\n  (playerHand === 'チョキ' && cpuHand === 'パー') ||\n  (playerHand === 'パー' && cpuHand === 'グー')\n) {\n  return '勝ち';\n}\n\nreturn '負け';",
      },
      {
        title: '② 処理を途中で終了する（onHandClick関数）',
        code: 'if (!hands.includes(hand)) {\n  return;\n}',
        note: 'ボタンから渡された手が「グー」「チョキ」「パー」のいずれでもない場合、クリック処理を途中で終了します。',
      },
    ],
    walkthrough: [
      { part: "return '引き分け';", text: '自分とCPUの手が同じ場合、「引き分け」を返してjudge関数を終了します。' },
      { part: "return '勝ち';", text: '勝ちの組み合わせだった場合、「勝ち」を返してjudge関数を終了します。' },
      { part: "return '負け';", text: '引き分けでも勝ちでもなかった場合、「負け」を返してjudge関数を終了します。' },
      { part: 'return;', text: '値を指定せずに関数を終了します。このアプリでは、想定外の手が渡された場合に、CPUの手を決める処理などが実行されないようにしています。' },
    ],
    result: [
      '① 勝敗を判定する場合',
      '同じ手なら「引き分け」を返す。',
      '勝ちの組み合わせなら「勝ち」を返す。',
      'それ以外なら「負け」を返す。',
      'いずれもreturnが実行された時点でjudge関数は終了するため、それ以降の処理は実行されません。',
      '② 想定外の手が渡された場合',
      'return; によってonHandClick関数が途中で終了します。',
      'そのため、CPUの手の決定や勝敗判定など、その後の処理は実行されません。',
    ],
    similar: [
      {
        name: '外部のデータを直接変更する方法',
        text: 'じゃんけんアプリのupdateScore関数では、returnを使わずにscores.winなどの値を直接増やしています。',
        code: 'scores.win += 1;',
        after: [
          'このように、関数は必ずしも値を返して利用する必要はありません。',
          'データを変更すること自体を目的とした関数もあります。',
        ],
      },
    ],
    related: [
      {
        name: 'function',
        text: '関数を定義するためのキーワードです。returnは、通常、関数の中で使用します。',
      },
      {
        name: 'const',
        text: '変数を宣言するキーワードです。returnで返された値を変数に保存することもできます。',
        code: 'const result = judge();',
      },
      {
        name: 'if',
        text: '条件によって処理を分岐する命令です。ifとreturnを組み合わせることで、特定の条件が成立した場合に関数を終了できます。',
      },
    ],
    alternatives: [
      {
        name: '勝敗判定と点数の加算を1つの関数にまとめる',
        text: 'じゃんけんの勝敗判定と点数の加算を、1つの関数にまとめることもできます。例えば、judge関数の中で直接scores.winなどを増やす方法です。ただし、このアプリでは役割を分けています。',
        after: [
          'judge：勝敗を判定して結果を返す。',
          'updateScore：判定結果に応じて点数を更新する。',
          'onHandClick：クリック時の処理を進め、必要に応じて途中で終了する。',
          '関数ごとに役割を分けることで、コードの処理内容を理解しやすくしています。',
        ],
      },
    ],
  },
  {
    name: '===',
    kind: 'JavaScript',
    reading: 'トリプルイコール、またはイコール三つ。現場でこう呼ばれることが多いです。',
    officialName: '厳密等価演算子。型も値も同じかを調べます。',
    summary: '左右の値が同じ種類で、内容も同じかを調べます。結果は true か false です。',
    purpose: [
      '二つの値が同じものとして扱えるかを調べ、その結果で次の作業を分けたいときに使います。',
      '同じに見えても、数字の 1 と文字の「1」は別です。=== はそこも区別します。= は比べる記号ではなく、右の値を左の名前に入れる記号です。',
      'このじゃんけんでは、あなたの手と CPU の手が同じ文字かどうかを調べて引き分けを決めます。点数では、結果が「勝ち」「負け」という文字かどうかを調べています。',
    ],
    usage: '左 === 右 と書きます。同じ種類で内容も同じなら true、そうでなければ false です。条件を調べた結果が true のとき、if の中の作業が実行されます。',
    example: "if (playerHand === cpuHand) {\n  return '引き分け';\n}",
    walkthrough: [
      { part: 'playerHand', text: 'あなたが押した手です。グー、チョキ、パーのいずれかの文字です。' },
      { part: '===', text: '左右が同じ種類で、内容も同じかを調べます。' },
      { part: 'cpuHand', text: 'CPU の手です。こちらも三つの手のいずれかの文字です。' },
      { part: 'if', text: '調べた結果が true のときだけ、次の return を実行します。' },
    ],
    result: [
      'playerHand が「グー」、cpuHand も「グー」なら、結果は true です。judge は「引き分け」を返します。',
      'playerHand が「グー」、cpuHand が「パー」なら、結果は false です。引き分けの return は実行されません。',
      '説明用の例です。1 === \'1\' は false です。数字と、数字に見える文字は別だと判断します。',
      '説明用の例です。[1, 2] === [1, 2] は false です。別々に作られた配列は、中身が同じでも同じものとは判定されません。{ a: 1 } === { a: 1 } も同じです。このじゃんけんが比べているのは、手を表す文字列です。',
    ],
    similar: [
      {
        name: '==',
        text: 'どちらも同じかを調べます。== は種類が違っても、変換して同じになれば true にします。たとえば数字の 1 と文字の「1」は == では true、=== では false です。このじゃんけんは === だけを使っています。',
      },
    ],
    related: [
      {
        name: 'if / else',
        text: '=== の true / false を if が受け取り、返す文字や増やす点数を決めています。',
      },
    ],
    alternatives: [
      {
        name: '=',
        text: 'playerHand = cpuHand は比較ではありません。CPU の手を、あなたの手の名前へ上書きします。同じかを調べる目的には使えません。',
      },
    ],
  },
  {
    name: '&& / ||',
    kind: 'JavaScript',
    reading: 'アンド / オア。記号はアンパサンド二つ、縦棒二つとも呼ばれます。',
    officialName: '論理積（&&）と論理和（||）です。',
    summary: '二つの条件を、「両方」または「少なくとも一方」でつなぎます。結果は true か false です。',
    purpose: [
      '一つの条件では足りないとき、条件どうしを組み合わせます。',
      '勝ちは「あなたの手」と「CPU の手」の組で決まるので、二つの比較を一つにまとめる必要があります。if を重ねて書いても、同じ判定はできます。',
      'このじゃんけんでは、グーはチョキに勝ち、チョキはパーに勝ち、パーはグーに勝つ、という三つの組を || でつないでいます。一つの組の中は && です。',
    ],
    usage: '左 && 右 は、両方が true のときだけ true です。左が false なら、右は見ずに false になります。左 || 右 は、少なくとも一方が true なら true です。左が true なら、右は見ずに true になります。',
    example: "(playerHand === 'グー' && cpuHand === 'チョキ') ||\n(playerHand === 'チョキ' && cpuHand === 'パー') ||\n(playerHand === 'パー' && cpuHand === 'グー')",
    walkthrough: [
      { part: "playerHand === 'グー'", text: 'あなたの手がグーという文字なら true です。' },
      { part: '&&', text: 'その比較と、右の比較の両方が true のときだけ true です。' },
      { part: "cpuHand === 'チョキ'", text: 'CPU の手がチョキなら true です。' },
      { part: '||', text: '三つの勝ちの組のうち、どれか一つでも true なら全体が true です。' },
    ],
    result: [
      'あなたがグー、CPU がチョキなら、最初の組が true です。judge は「勝ち」を返します。',
      'あなたがグー、CPU がパーなら、三つの組はすべて false です。この if には入らず、その下の return \'負け\' が実行されます。',
    ],
    similar: [
      {
        name: 'if を重ねる',
        text: '「グーかつチョキ」「チョキかつパー」を、別々の if で書いても同じ勝ちを判定できます。このアプリでは、三つの組を一つの条件にまとめています。',
      },
    ],
    related: [
      {
        name: '===',
        text: '&& と || がつなぐのは、=== が返した true か false です。',
      },
    ],
    alternatives: [
      {
        name: '勝ちの組ごとに if を書く',
        text: '組が三つだけなので、if を三回書くこともできます。条件を一か所にまとめて読むため、|| でつないでいます。',
      },
    ],
  },
  {
    name: '[]',
    kind: 'JavaScript',
    reading: '角括弧、またはブラケット。配列を作るときはこう呼ばれます。',
    officialName: '配列リテラル。複数の値を順番に並べて管理する書き方です。',
    summary: '複数の値を順番に並べて管理します。最初の番号は 1 ではなく 0 です。',
    purpose: [
      '同じ種類の値を順番つきでまとめておき、個数や位置で取り出したいときに使います。',
      '手を三つの別々の名前にすると、ランダムに選ぶときに番号へ変換しにくくなります。別々の名前でもじゃんけん自体は作れます。',
      'このじゃんけんでは、hands にグー、チョキ、パーをこの順で入れています。0 がグー、1 がチョキ、2 がパーです。',
    ],
    usage: '[値1, 値2, 値3] と、値をカンマで区切って角括弧で囲みます。空の並びは [] です。後から位置を指定する [番号] も角括弧ですが、新しく並びを作る役とは違います。',
    example: "const hands = ['グー', 'チョキ', 'パー'];",
    walkthrough: [
      { part: '[', text: 'ここから並びが始まる、という印です。' },
      { part: "'グー', 'チョキ', 'パー'", text: '前から 0 番、1 番、2 番として並ぶ三つの文字です。' },
      { part: ']', text: '並びがここまで、という印です。' },
      { part: 'const hands', text: 'この並びに hands という名前を付けています。' },
    ],
    result: [
      'hands は三つの手を持った並びになります。',
      'hands[0] は「グー」、hands[1] は「チョキ」、hands[2] は「パー」です。',
    ],
    similar: [
      {
        name: '{}',
        text: 'どちらも複数の値を一つにまとめます。[] は 0 からの番号で取り出します。{} は win のような名前で取り出します。',
      },
    ],
    related: [
      {
        name: '[番号]、length、includes()',
        text: '番号で取り出し、length で個数を知り、includes() で中にあるかを調べています。',
      },
    ],
    alternatives: [
      {
        name: '手ごとに別の名前を付ける',
        text: 'const goo = \'グー\' のように分けることもできます。番号でランダムに選ぶため、このアプリは一つの並びにしています。',
      },
    ],
  },
  {
    name: '[番号]',
    kind: 'JavaScript',
    reading: '添字、またはインデックス。角括弧の中の番号でも指します。',
    officialName: 'インデックスアクセス。並びの指定した位置の値を取り出します。',
    summary: '並びの何番目かを指定して、その位置の値を取り出します。最初は 0 番です。',
    purpose: [
      '並びの中から、計算で決めた位置の値だけが欲しいときに使います。',
      '並び全体では画面に出せません。CPU の手は、三つのうち一つにする必要があります。',
      'このじゃんけんでは、0、1、2 のどれかにした index を使い、hands[index] で CPU の手を決めています。',
    ],
    usage: '並び[番号] と書きます。番号は 0 から始まります。並びの個数と同じ番号や、それより大きい番号を指定すると、その位置には値がないので undefined になります。',
    example: 'const index = Math.floor(Math.random() * hands.length);\nconst cpuHand = hands[index];',
    walkthrough: [
      { part: 'index', text: '0、1、2 のどれかです。何番目の手を取るかを表します。' },
      { part: 'hands', text: 'グー、チョキ、パーの並びです。' },
      { part: '[index]', text: 'その番号の位置にある一つの手を取り出します。' },
      { part: 'const cpuHand', text: '取り出した手を、CPU の手として覚えています。' },
    ],
    result: [
      'index が 0 なら cpuHand は「グー」、1 なら「チョキ」、2 なら「パー」です。',
      'hands.length は 3 なので、この計算で index が 3 になることはありません。hands[3] は値が無く undefined になります。',
    ],
    similar: [
      {
        name: '.名前',
        text: 'どちらもまとめたデータの中の一つを取り出します。[番号] は順番の位置、.名前 は win のような名前で指定します。',
      },
    ],
    related: [
      {
        name: 'Math.floor() と length',
        text: '番号は Math.random() と Math.floor() と hands.length から作っています。',
      },
    ],
    alternatives: [
      {
        name: 'includes()',
        text: '中にあるかどうかだけを調べる役です。何番目の手を一枚取り出す役とは違います。',
      },
    ],
  },
  {
    name: '{}',
    kind: 'JavaScript',
    reading: '波括弧、またはブレース。データのまとまりを作るときはこう呼ばれます。',
    officialName: 'オブジェクトリテラル。名前の付いた値を一つにまとめる書き方です。ただし同じ記号は、作業の範囲を囲むときにも使います。',
    summary: 'win のような名前と値の組を、一つのデータにまとめます。関数や if の範囲を囲む波括弧とは役が違います。',
    purpose: [
      '番号ではなく名前で取り出したい値を、一つにまとめて渡したいときに使います。',
      '勝ち数、負け数、引き分け数を別々の名前だけにすると、まとめて控えるときに三回書くことになります。別々の名前でも点数の管理はできます。',
      'このじゃんけんでは、scores に win、lose、draw をまとめ、decideCpuHand は index と cpuHand を一つのデータにして返しています。',
    ],
    usage: '{ 名前: 値, 名前: 値 } と書きます。名前と値の間はコロン、組の間はカンマです。関数や if の直後の { } はデータのまとまりではなく、実行する作業の範囲です。',
    example: 'const scores = {\n  win: 0,\n  lose: 0,\n  draw: 0,\n};\n\nreturn {\n  index: index,\n  cpuHand: cpuHand,\n};',
    walkthrough: [
      { part: '{', text: 'データのまとまりの開始です。関数の作業範囲を始める波括弧とは役が違います。' },
      { part: 'win: 0', text: 'win という名前で、数字の 0 を入れています。' },
      { part: 'lose と draw', text: '負け数と引き分け数も、同じまとまりの中に 0 で入っています。' },
      { part: 'return { index: index, cpuHand: cpuHand }', text: 'CPU の番号と手を、名前を付けた一つのデータとして呼んだ場所へ返します。' },
    ],
    result: [
      'scores.win、scores.lose、scores.draw は、最初すべて 0 です。',
      'decideCpuHand() の受け取り側では、cpu.index と cpu.cpuHand として番号と手を別々に読めます。',
    ],
    similar: [
      {
        name: '[]',
        text: 'どちらも複数の値を一つにまとめます。{} は名前で、[] は 0 からの番号で中の値を指定します。',
      },
    ],
    related: [
      {
        name: '.名前',
        text: 'まとめたあとに scores.win や cpu.cpuHand と書いて、一つの値を取り出しています。',
      },
    ],
    alternatives: [
      {
        name: 'win、lose、draw を別々の名前にする',
        text: '三つに分けても点数は覚えられます。リセットや表示のときにまとめて扱えるので、このアプリは一つの scores にしています。',
      },
      {
        name: 'return { index, cpuHand }',
        text: '説明用の例です。名前と、入れる値の変数名が同じときは、このように短く書けます。このアプリは index: index、cpuHand: cpuHand と、名前と値の両方を書いています。',
      },
    ],
  },
  {
    name: '.名前',
    kind: 'JavaScript',
    reading: 'ドット。ドット記法とも呼ばれます。',
    officialName: 'プロパティアクセス。オブジェクトの中の値を名前で指定する書き方です。',
    summary: 'まとめたデータの中から、名前を指定して一つの値を取り出したり、その値を入れ替えたりします。',
    purpose: [
      '一つのデータに入れた複数の値から、必要な名前のものだけを使いたいときに書きます。',
      'scores 全体では、画面の「勝ち」の数字だけを増やせません。どの数字かを名前で指定します。',
      'このじゃんけんでは、scores.win、scores.lose、scores.draw を増やすときと、CPU の手を cpu.cpuHand として読むときに使っています。',
    ],
    usage: 'データ.名前 と書きます。ドットの右は、まとめたときに付けた名前です。引用符や角括弧は要りません。データ["名前"] でも同じ値を読めますが、このじゃんけんではドットで書いています。',
    example: 'scores.win += 1;\nconst result = judge(playerHand, cpu.cpuHand);',
    walkthrough: [
      { part: 'scores', text: '勝ち数、負け数、引き分け数をまとめたデータです。' },
      { part: '.win', text: 'その中の、勝ち数という名前の値を指します。' },
      { part: '+= 1', text: '指した勝ち数に 1 を足して、同じ場所へ戻します。' },
      { part: 'cpu.cpuHand', text: 'decideCpuHand が返したデータの中から、CPU の手だけを取り出します。' },
    ],
    result: [
      'scores.win が 0 のときに scores.win += 1 を実行すると、scores.win は 1 になります。lose と draw は 0 のままです。',
      'cpu.cpuHand は「グー」「チョキ」「パー」のどれか一つです。',
    ],
    similar: [
      {
        name: '[番号]',
        text: 'どちらもまとめたデータの中の一つを取り出します。.名前 は win のような名前、[番号] は 0 からの位置で指定します。',
      },
    ],
    related: [
      {
        name: '{}',
        text: 'ドットで読む名前は、{} でデータを作ったときの名前です。',
      },
    ],
    alternatives: [
      {
        name: 'scores["win"]',
        text: '角括弧と文字でも win の値を読めます。このじゃんけんでは scores.win と書いています。意味は同じです。',
      },
    ],
  },
  {
    name: 'length',
    kind: 'JavaScript',
    reading: 'レングス。長さとしてこう呼ばれます。',
    officialName: 'length プロパティ。配列では、入っている値の個数です。',
    summary: '並びの中に値がいくつあるかを表します。このじゃんけんの hands.length は 3 です。',
    purpose: [
      '並びの個数を、数字で直接書かずに知りたいときに使います。',
      '手を四つに増やしたとき、ランダムの計算に 3 と書いてあると、四つ目が選ばれません。length なら個数の変化に追従できます。3 と直接書いても、手が三つのあいだは同じ結果になります。',
      'このじゃんけんでは、Math.random() * hands.length として、0 以上 3 未満の数を作るために使っています。',
    ],
    usage: '並び.length と書きます。() は付けません。値を入れる場所ではなく、並びが覚えている個数を読む名前です。最初の位置が 0 番なので、最後の位置は length - 1 です。',
    example: 'const index = Math.floor(Math.random() * hands.length);',
    walkthrough: [
      { part: 'hands', text: 'グー、チョキ、パーが入った並びです。' },
      { part: '.length', text: 'その個数です。今は 3 です。' },
      { part: 'Math.random() * hands.length', text: '0 以上 1 未満の数を 3 倍し、0 以上 3 未満の数にします。' },
    ],
    result: [
      'hands.length は 3 です。最後に取り出せる番号は 2 です。',
      'この掛け算の結果を Math.floor で整数にすると、index は 0、1、2 のどれかになります。',
    ],
    similar: [
      {
        name: '選んだ部品の個数',
        text: '説明用の比較です。jQuery で選んだ部品にも length があり、見つけた部品の個数を表します。このアプリの処理では使っていません。この項目は、hands という並びの個数です。',
      },
    ],
    related: [
      {
        name: 'Math.random() と [番号]',
        text: '個数を掛けて番号の範囲を作り、その番号で hands から手を取り出しています。',
      },
    ],
    alternatives: [
      {
        name: '* 3 と書く',
        text: '手が三つと決まっているあいだは、同じ範囲の番号になります。並びの個数を変えても計算を直さずに済むので、length を使っています。',
      },
    ],
  },
  {
    name: 'includes()',
    kind: 'JavaScript',
    reading: 'インクルーズ。含まれるかを調べるメソッドとしてこう呼ばれます。',
    officialName: 'Array.prototype.includes。配列の中に値が含まれるかを返します。',
    summary: '並びの中に、指定した値が一つでもあるかを調べます。結果は true か false です。',
    purpose: [
      '位置は不要で、その値が入っているかだけを知りたいときに使います。',
      '想定していない値がボタンから来ても、勝敗や点数の処理へ進まないようにするためです。=== を手の数だけ書くことでも調べられます。',
      'このじゃんけんでは、押された hand が hands の中にあるかを調べ、無ければそのクリックをそこで終えています。',
    ],
    usage: '並び.includes(調べる値) と書きます。includes が作業の名前、() の中が探したい値です。同じ値があれば true、無ければ false です。このじゃんけんのグー、チョキ、パーのような文字列なら、=== で一つずつ比べるのと同じ結果になります。すべての値で、includes() の比較が === と完全に同じというわけではありません。',
    example: 'if (!hands.includes(hand)) {\n  return;\n}',
    walkthrough: [
      { part: 'hands', text: 'グー、チョキ、パーの並びです。' },
      { part: '.includes', text: 'その並びの中を探す作業の名前です。' },
      { part: '(hand)', text: 'ボタンから読んだ、探したい手です。' },
      { part: '!', text: '見つかったという true を、見つからなかったときに進む形へ逆にします。' },
    ],
    result: [
      'hand が「チョキ」なら true です。! で false になるので return せず、じゃんけんを続けます。',
      'hand が並びの中に無ければ false です。! で true になり、そのクリックは点数を増やす前に終わります。',
    ],
    similar: [
      {
        name: '=== を三回書く',
        text: 'グー、チョキ、パーと一回ずつ === で比べても、この三つの文字列なら同じ結果になります。手が増えても呼び出しが一回で済むので includes() を使っています。',
      },
    ],
    related: [],
    alternatives: [
      {
        name: "hand === 'グー' || hand === 'チョキ' || hand === 'パー'",
        text: '三つの比較を || でつないでも、正しい手かを判断できます。このアプリは並びの中を探す includes() にしています。',
      },
    ],
  },
  {
    name: 'Math.random()',
    kind: 'JavaScript',
    reading: 'マス ドット ランダム。乱数を作る関数としてこう呼ばれます。',
    officialName: 'Math.random。0 以上 1 未満の数を返します。',
    summary: '0 以上 1 未満の小数を、実行のたびに新しく作ります。1 そのものは返りません。',
    purpose: [
      '実行するたびに、ランダムな数を作ります。前と同じ数になることもあります。',
      'じゃんけんの相手の手を、その場で選びたいときに使います。暗号やセキュリティのように、予測されては困る番号を作る用途には向きません。決まった番号を書けば、手を固定することもできます。',
      'このじゃんけんでは、返った数を手の個数 3 倍し、Math.floor() で 0、1、2 のいずれかにしてから hands の位置に使っています。',
    ],
    usage: 'Math.random() と書きます。Math は数値の作業をまとめた場所、random がその中の作業名、() は値を渡さずに実行する印です。受け取る値は 0 以上 1 未満です。',
    example: 'const index = Math.floor(Math.random() * hands.length);',
    walkthrough: [
      { part: 'Math.random()', text: 'たとえば 0.0 や 0.73 のような、0 以上 1 未満の数を新しく作ります。' },
      { part: '* hands.length', text: 'その数を 3 倍します。結果は 0 以上 3 未満です。' },
      { part: 'Math.floor(...)', text: '小数を、それ以下で一番大きい整数にします。0、1、2 のどれかになります。' },
      { part: 'const index', text: 'その整数を、並びの何番目を取るかの番号として覚えています。' },
    ],
    result: [
      '0.0 が返ると、3 倍しても 0 です。index は 0、CPU の手は「グー」です。',
      '0.99 が返ると、3 倍して 2.97 です。floor で 2 になり、CPU の手は「パー」です。',
      '1 は返らないので、3 倍してちょうど 3 になり、存在しない 3 番を選ぶことはありません。',
    ],
    similar: [],
    related: [
      {
        name: 'Math.floor() と length',
        text: '小数のままでは並びの番号にできないので、個数を掛けたあと floor で整数にしています。',
      },
    ],
    alternatives: [
      {
        name: 'いつも 0 を入れる',
        text: 'index = 0 と書くと、CPU は毎回グーです。実行のたびに選び直す目的とは違う結果になります。',
      },
    ],
  },
  {
    name: 'Math.floor()',
    kind: 'JavaScript',
    reading: 'マス ドット フロア。床関数としてこう呼ばれます。',
    officialName: 'Math.floor。指定した数以下で、一番大きい整数を返します。',
    summary: '数を、それより大きくならない一番近い整数にします。0 以上の数では、小数点以下を切り捨てた結果と同じになります。',
    purpose: [
      '小数を、並びの番号として使える整数にしたいときに使います。',
      'hands[0.7] のように小数の位置を指定しても、並びの手は取り出せません。四捨五入とは違い、0 以上の数では切り上げません。',
      'このじゃんけんでは、0 以上 3 未満の小数を 0、1、2 のいずれかにするために使っています。',
    ],
    usage: 'Math.floor(数) と書きます。() の中が変換したい数です。正の数では小数点以下がなくなります。負の数では 0 に近づけるのではなく、より小さい整数になります。説明用の例ですが、Math.floor(-1.2) は -1 ではなく -2 です。このアプリが渡す数は 0 以上です。',
    example: 'const index = Math.floor(Math.random() * hands.length);\nconst cpuHand = hands[index];',
    walkthrough: [
      { part: 'Math.random() * hands.length', text: '0 以上 3 未満の小数です。' },
      { part: 'Math.floor', text: 'その数以下で一番大きい整数を作る作業です。' },
      { part: 'index', text: 'できた 0、1、2 のどれかです。' },
      { part: 'hands[index]', text: 'その番号の手を CPU の手にします。' },
    ],
    result: [
      '2.97 を渡すと 2 になります。CPU の手は「パー」です。',
      '0 を渡すと 0 のままです。CPU の手は「グー」です。',
      'このアプリの計算では、結果が 3 以上になることはありません。',
    ],
    similar: [
      {
        name: '四捨五入',
        text: '小数を整数にする点は似ています。四捨五入は 0.5 以上を繰り上げます。floor は、0 以上の数では繰り上げません。このじゃんけんは floor を使っています。',
      },
    ],
    related: [
      {
        name: 'Math.random() と [番号]',
        text: 'random が作った小数を整数にし、その整数で並びから手を取り出しています。',
      },
    ],
    alternatives: [],
  },
  {
    name: 'String()',
    kind: 'JavaScript',
    reading: 'ストリング。文字列へ変換する関数としてこう呼ばれます。',
    officialName: 'String。値を文字列に変換します。',
    summary: '数字を文字列に変えます。数字の 1 と、文字の「1」は別の種類のデータです。',
    purpose: [
      '計算に使う数字を、画面に置く文字として渡したいときに使います。',
      '数字のままでは「1 という数」、String(1) のあとは「1 という文字」です。画面の文言とつなぐときは、種類を揃えた方が意図が読めます。',
      'このじゃんけんでは、scores.win などの数字を String() で文字にしてから、.text() で勝ち・負け・引き分けの表示へ入れています。',
    ],
    usage: 'String(値) と書きます。() の中が文字にしたい値です。String(1) は文字の「1」、String(0) は文字の「0」です。jQuery の .text() は数字を渡しても、表示するときに文字へします。このアプリは、渡す前に String() で文字にしています。',
    example: "$('.score-win').text(String(scores.win));",
    walkthrough: [
      { part: 'scores.win', text: '勝ち数です。たとえば数字の 1 です。' },
      { part: 'String(...)', text: 'その数字を、画面に置ける文字の「1」へ変えます。' },
      { part: ".text(...)", text: '「勝ち」の表示場所の中の文字を、その文字に入れ替えます。' },
    ],
    result: [
      'scores.win が数字の 1 のとき、画面の勝ち数は 1 と表示されます。',
      '説明用の例です。.text(scores.win) と数字のまま渡しても、jQuery が表示時に文字へするため、見た目は同じ 1 になります。このアプリは String() を通しています。',
    ],
    similar: [
      {
        name: '数字のまま .text() へ渡す',
        text: '画面に出る数字は同じに見えます。String() は、渡す前に文字へ変えることをコード上で明示しています。',
      },
    ],
    related: [
      {
        name: '.text()',
        text: '文字になった点数を、HTML の表示場所へ入れています。',
      },
    ],
    alternatives: [
      {
        name: 'scores.win + ""',
        text: '空の文字と足すと、数字は文字の「1」になります。このじゃんけんでは、変換だと分かる String() を使っています。',
      },
    ],
  },
  {
    name: '+=',
    kind: 'JavaScript',
    reading: 'プラスイコール。加算代入としてこう呼ばれます。',
    officialName: '加算代入演算子。今の値に足して、同じ場所へ戻します。',
    summary: '今入っている数字に足して、その結果を同じ場所へ入れ直します。',
    purpose: [
      '回数や合計のように、今の数字を残したまま増やしたいときに使います。',
      'scores.win = 1 と書くと、それまでの勝ち数を捨てて 1 になります。これまでの合計を残すには、今の値に足す必要があります。',
      'このじゃんけんでは、勝ちなら scores.win、負けなら scores.lose、引き分けなら scores.draw に 1 を足しています。',
    ],
    usage: '場所 += 足す数 と書きます。場所 += 1 は、場所 = 場所 + 1 と同じ結果です。左は入れ直す場所、+= は足して戻す記号、右は足す数です。',
    example: 'scores.win += 1;',
    walkthrough: [
      { part: 'scores.win', text: '勝ち数という、今の数字が入っている場所です。' },
      { part: '+=', text: '今の数字に右の数を足し、同じ場所へ入れ直します。' },
      { part: '1', text: '1 回分、という足す数です。' },
    ],
    result: [
      '実行前に scores.win が 0 なら、実行後は 1 です。',
      '実行前に 2 なら、実行後は 3 です。scores.lose と scores.draw は、この行だけでは変わりません。',
    ],
    similar: [
      {
        name: 'scores.win = 1',
        text: '数字を入れる点は似ています。= 1 は今の勝ち数を捨てて 1 にします。+= 1 は今の勝ち数に 1 を足します。',
      },
    ],
    related: [
      {
        name: '.名前 と if / else',
        text: 'どの点数に足すかを if / else で決め、.win のような名前でその数字だけを増やしています。',
      },
    ],
    alternatives: [
      {
        name: 'scores.win = scores.win + 1',
        text: '今の勝ち数に 1 を足して、同じ場所へ入れ直します。scores.win += 1 と同じ結果です。このアプリは += と書いています。',
      },
    ],
  },
  {
    name: 'event.currentTarget',
    kind: 'JavaScript',
    reading: 'イベント ドット カレントターゲット。',
    officialName: 'Event.currentTarget。イベントを受け取るよう登録した要素です。',
    summary: 'クリックに関する情報 event の中から、クリック処理を登録した要素を参照します。',
    purpose: [
      'どのボタンが押されたかによって、次に読む値を変えたいときに使います。',
      '三つのボタンが同じ作業を共有していると、作業の中では「今のボタン」を知る必要があります。ボタンごとに別の関数を書いても、手は区別できます。',
      'このじゃんけんでは、押されたボタンから data-hand を読み、グー、チョキ、パーのどれかを決めています。',
    ],
    usage: '.on() で登録した関数は、クリックが起きたときに実行されます。その関数には、クリックに関する情報を持つ event が渡されます。event.currentTarget から、クリック処理を登録した要素を参照できます。event.target は、実際にポインタの下にあった要素です。ボタンの中に別の要素があると、target はその内側、currentTarget は登録したボタンを指すことがあります。このアプリの手のボタンには内側の要素が無いので、このクリックでは同じボタンです。',
    example: "const hand = $(event.currentTarget).attr('data-hand');",
    walkthrough: [
      { part: 'event', text: 'クリックに関する情報です。クリックすると、登録された関数にこの event が渡されます。' },
      { part: '.currentTarget', text: 'event の中から、クリック処理を登録したボタンを参照します。ボタン自体が関数の引数として渡されるわけではありません。' },
      { part: '$(...)', text: 'そのボタンを、jQuery で文字や属性を操作できる形にします。' },
      { part: ".attr('data-hand')", text: 'ボタンに書いてある data-hand の値を読みます。グー、チョキ、パーのいずれかです。' },
    ],
    result: [
      'グーのボタンを押すと、hand は「グー」です。',
      '同じ onHandClick を三つのボタンで共有していても、押したボタンの data-hand だけが読まれます。',
    ],
    similar: [
      {
        name: 'event.target',
        text: 'どちらもクリックに関係する要素です。target は実際に押された一番内側の要素、currentTarget はイベントを登録した要素です。この手のボタンでは、両方がそのボタン自身になります。',
      },
    ],
    related: [
      {
        name: '.on() と .attr()',
        text: '.on() でクリックを登録し、currentTarget から .attr() で data-hand を読んでいます。',
      },
    ],
    alternatives: [
      {
        name: 'ボタンに表示されている文字を読む',
        text: 'ボタンの見える文字もグー、チョキ、パーです。このアプリは、表示文字ではなく data-hand の値を手として読んでいます。',
      },
    ],
  },
  {
    name: '$()',
    kind: 'jQuery',
    reading: 'ダラー。jQuery の関数としてこう呼ばれます。',
    officialName: 'jQuery 関数。HTML の部品を選び、jQuery で操作できる形にします。',
    summary: 'ページの中からボタンや文字の表示場所を指定し、jQuery の作業を続けられるようにします。',
    purpose: [
      'HTML に書いた部品を、JavaScript から見つけて文字や class を変えたいときに使います。',
      '部品を見つけるだけでは画面は変わりません。見つけた結果を jQuery の形にしておくと、.text() や .on() を続けて書けます。標準の document.querySelector() で見つけてから操作することもできます。',
      'このじゃんけんでは、三つの手のボタン、あなたと CPU の手の表示、判定、勝ち・負け・引き分けの数字、リセットボタンを見つけるために使っています。',
    ],
    usage: '$(\'CSSの指定\') と書きます。$ は jQuery の関数、() の中の文字はどの部品かを決める指定です。.hand-button は class が hand-button の部品、.player-hand はあなたの手を出す場所です。',
    example: "$('.hand-button')\n$('.player-hand').text(playerHand)\n$('.score-win').text(String(scores.win))",
    walkthrough: [
      { part: '$', text: 'jQuery の関数です。JavaScript とは別の言語ではなく、JavaScript から使う追加の道具です。' },
      { part: "'.hand-button'", text: 'class に hand-button と付いた部品、という指定です。このアプリでは三つのボタンが該当します。' },
      { part: "'.player-hand'", text: 'あなたの手を表示する場所です。' },
      { part: '.text(playerHand)', text: '見つけた場所の文字を、選んだ手に入れ替えます。' },
    ],
    result: [
      '$(\'.hand-button\') は、グー、チョキ、パーの三つのボタンをまとめて指します。この行だけでは見た目は変わりません。',
      '$(\'.player-hand\').text(\'グー\') を実行すると、あなたの手の表示がグーになります。',
    ],
    similar: [
      {
        name: 'document.querySelector()',
        text: 'どちらもページの中の部品を見つけます。querySelector() は最初の一つを、ブラウザ標準の形で返します。$() は該当する部品をまとめて、.text() や .on() を続けられる形にします。このアプリは $() を使っています。',
      },
    ],
    related: [
      {
        name: '.text()、.on()、.addClass()',
        text: '$() で見つけた結果に、文字の変更、クリックの登録、class の追加を続けています。',
      },
    ],
    alternatives: [
      {
        name: 'document.querySelectorAll()',
        text: '三つのボタンをまとめて見つけること自体は、標準の機能でもできます。その後の .text() や .on() を使うため、このアプリは jQuery の $() で包んでいます。',
      },
    ],
  },
  {
    name: '$(function () {})',
    kind: 'jQuery',
    reading: 'ダラー、ファンクション。jQuery の ready として扱われます。',
    officialName: 'jQuery の ready。HTML の部品が組み立てられてから関数を実行します。',
    summary: 'ページの HTML 部品が使える状態になってから、中の作業を実行します。画像の読み込み完了までは待ちません。',
    purpose: [
      'ボタンを見つける作業を、ボタンがページに現れるより先に実行したくないときに使います。',
      'まだ HTML にボタンが無い段階で $(\'.hand-button\') を実行すると、見つける対象がありません。script をページの末尾に置いても、部品が揃ってから実行できます。このアプリは末尾に置き、さらに ready でも待っています。',
      'このじゃんけんでは、準備ができたあとに、手のボタンとリセットボタンへクリックする作業を登録しています。',
    ],
    usage: '$(function () { 実行したい作業 }) と書きます。function () { } は名前の無い作業のまとまりです。jQuery が、HTML の部品を操作できるタイミングでその作業を実行します。画像や外部ファイルのすべてが読み終わったときではないので、window の load より早い時点です。',
    example: "$(function () {\n  const $hands = $('.hand-button');\n  const $reset = $('.score-reset');\n  $hands.on('click', onHandClick);\n  $reset.on('click', onResetClick);\n});",
    exampleNote: '手のボタンとスコアリセットボタンへ、クリックを登録する部分です。APP にあるこの二つの登録と同じコードです。',
    walkthrough: [
      { part: '$(function () { })', text: '中の作業を、HTML の部品が揃ってから実行する、という予約です。' },
      { part: "$('.hand-button')", text: '三つの手のボタンを見つけます。' },
      { part: "$('.score-reset')", text: 'スコアリセットのボタンを見つけます。' },
      { part: ".on('click', onHandClick)", text: '手のボタンがクリックされたら onHandClick を実行する、と登録します。この行だけではじゃんけんはまだ始まりません。' },
    ],
    result: [
      'ページを開いて HTML の部品が揃うと、この中が一度実行されます。',
      'そのあとグーを押すと、登録済みの onHandClick が動き、じゃんけんが始まります。',
    ],
    similar: [
      {
        name: 'window の load',
        text: 'どちらも、あとで作業を実行する予約です。load は画像などの読み込み完了まで待ちます。$(function () {}) は、HTML の部品が組み立てられた時点で実行します。',
      },
    ],
    related: [
      {
        name: 'function と .on()',
        text: '中に名前の無い関数を渡し、その中でクリックの作業を .on() で登録しています。',
      },
    ],
    alternatives: [
      {
        name: 'script をページの末尾に置く',
        text: 'ボタンよりあとで script を読めば、見つけられる状態になっています。このアプリはその配置にしたうえで、ready でも待っています。',
      },
    ],
  },
  {
    name: '.on()',
    kind: 'jQuery',
    reading: 'オン。イベントを登録するメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の on。要素に出来事の処理を登録します。',
    summary: 'クリックなどが起きたときに実行する作業を、指定した部品へ登録します。登録しただけでは作業は実行されません。',
    purpose: [
      'ボタンが押されたタイミングで、こちらの作業を動かしたいときに使います。',
      '登録が無いと、ボタンを押してもじゃんけんの関数は呼ばれません。HTML に onclick と書くことでも、クリックと作業をつなげられます。',
      'このじゃんけんでは、三つの手のボタンに onHandClick、リセットボタンに onResetClick を登録しています。',
    ],
    usage: '部品.on(\'出来事の名前\', 実行する関数) と書きます。on が登録する作業、最初の文字が出来事の種類、次が出来事が起きたときに呼ぶ関数です。click はクリックを表します。',
    example: "$hands.on('click', onHandClick);\n$reset.on('click', onResetClick);",
    walkthrough: [
      { part: '$hands', text: 'すでに見つけてある、三つの手のボタンです。' },
      { part: '.on', text: '出来事と作業を、そのボタンへ登録する作業です。' },
      { part: "'click'", text: '登録する出来事はクリックです。' },
      { part: 'onHandClick', text: 'クリックされたときに実行する関数の名前です。この行ではまだ実行していません。' },
    ],
    result: [
      'この二行を実行した直後は、手も点数も変わりません。',
      'そのあとグーを押すと、登録した onHandClick が実行されます。関数にはクリックの情報を持つ event が渡されます。event.currentTarget から、クリック処理を登録したボタンを参照できます。',
    ],
    similar: [
      {
        name: 'addEventListener',
        text: 'どちらも、クリックなどの出来事に作業を登録します。addEventListener はブラウザ標準の書き方、.on() は jQuery で同じ登録をする書き方です。このアプリは .on() を使っています。',
      },
    ],
    related: [
      {
        name: 'event.currentTarget と function',
        text: '登録した onHandClick がクリック時に実行され、その中で currentTarget から手を読んでいます。',
      },
    ],
    alternatives: [
      {
        name: 'HTML の onclick',
        text: 'ボタンの HTML に onclick と関数名を書いても、クリックで関数を実行できます。このアプリは HTML ではなく、JavaScript 側の .on() で登録しています。',
      },
    ],
  },
  {
    name: '.text()',
    kind: 'jQuery',
    reading: 'テキスト。文字を読む、または入れるメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の text。要素のテキストを設定または取得します。',
    summary: 'HTML の部品の中に見える文字を入れ替えます。() に値を書かないと、今入っている文字を読みます。',
    purpose: [
      '判定や点数など、画面に見えている文字だけを変えたいときに使います。',
      '文字を入れ替えないと、じゃんけんの結果が計算されても画面は「—」のままです。.html() でも中身は変えられますが、書いた文字を HTML のタグとして解釈します。',
      'このじゃんけんでは、あなたの手、CPU の手、判定、勝ち・負け・引き分けの数字を入れています。文字を読み取る使い方はしていません。',
    ],
    usage: '部品.text(入れる文字) と書くと、中の文字をその文字に入れ替えます。部品.text() と () を空にすると、今の文字を返します。タグのような文字も、タグとしては働かず、そのままの文字として表示します。',
    example: "$('.player-hand').text(playerHand);\n$('.score-win').text(String(scores.win));",
    walkthrough: [
      { part: "$('.player-hand')", text: 'あなたの手を表示する場所を見つけます。' },
      { part: '.text(playerHand)', text: 'その場所の文字を、選んだ手に入れ替えます。' },
      { part: 'String(scores.win)', text: '勝ち数の数字を文字にしてから渡しています。' },
      { part: ".text(...)", text: '「勝ち」の横に表示する数字を、その文字に入れ替えます。' },
    ],
    result: [
      'playerHand が「パー」なら、あなたの手の表示はパーになります。',
      'scores.win が 2 なら、勝ちの数字は 2 と表示されます。',
      '説明用の例です。$(\'.player-hand\').text() と値を渡さなければ、今表示している「パー」という文字が返ります。このアプリはその読み取りはしていません。',
    ],
    similar: [
      {
        name: '.html()',
        text: 'どちらも部品の中身を変えます。.html() は <b> のようなタグを、太字などの指示として解釈します。.text() はタグもただの文字として表示します。このアプリは .text() だけを使っています。',
      },
    ],
    related: [
      {
        name: 'String()',
        text: '点数の数字を文字にしてから .text() に渡しています。',
      },
    ],
    alternatives: [
      {
        name: '.html()',
        text: '手の名前を表示すること自体は .html() でもできます。タグとして解釈させないため、このアプリは .text() にしています。',
      },
    ],
  },
  {
    name: '.attr()',
    kind: 'jQuery',
    reading: 'アター、またはアトリビュート。属性を読む・書くメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の attr。HTML の属性を取得または設定します。',
    summary: 'HTML のタグに設定された属性（追加情報）を読む、または書き換えます。',
    purpose: [
      '画面の本文とは別に、タグへ持たせた情報を使いたいときに使います。この追加情報は属性と呼ばれます。',
      'ボタンの見える文字と、プログラムが手として使う値を分けておけます。見える文字を直接読むことでも、今の三つのボタンなら同じ文字は得られます。',
      'このじゃんけんでは、data-hand からグー、チョキ、パーを読み、選んだボタンの aria-pressed を true、それ以外を false に書き換えています。',
    ],
    usage: '部品.attr(\'属性の名前\') と一つだけ渡すと、その属性の値を読みます。部品.attr(\'属性の名前\', 新しい値) と二つ渡すと、その属性を書き換えます。data-hand は手の値、aria-pressed は押されているかを支援技術へ伝える属性です。',
    example: "const hand = $(event.currentTarget).attr('data-hand');\n$('.hand-button').attr('aria-pressed', 'false');",
    walkthrough: [
      { part: 'event.currentTarget', text: '今クリックされたボタンです。' },
      { part: ".attr('data-hand')", text: '引数が一つなので、data-hand の今の値を読みます。' },
      { part: "$('.hand-button')", text: '三つの手のボタンすべてです。' },
      { part: ".attr('aria-pressed', 'false')", text: '引数が二つなので、すべての aria-pressed を false という文字に書き換えます。' },
    ],
    result: [
      'グーのボタンには data-hand="グー" と書いてあるので、hand は「グー」になります。',
      '二行目のあと、三つのボタンの aria-pressed はいったんすべて false です。選ばれたボタンだけ、あとから true に戻しています。',
    ],
    similar: [
      {
        name: '.data()',
        text: 'data- で始まる属性を扱う点は似ています。.data() は jQuery が値を変換して覚えます。.attr() は HTML に書いてある文字をそのまま読み書きします。このアプリは .attr(\'data-hand\') を使い、.data() は使っていません。',
      },
    ],
    related: [
      {
        name: 'event.currentTarget と .filter()',
        text: 'クリックされたボタンの data-hand を読み、同じ data-hand を持つボタンだけを .filter() で次の操作の対象として選んでいます。',
      },
    ],
    alternatives: [
      {
        name: ".data('hand')",
        text: 'data-hand を別の仕組みで読む書き方です。このじゃんけんでは使っていません。読んでいるのは .attr(\'data-hand\') です。',
      },
    ],
  },
  {
    name: '.addClass()',
    kind: 'jQuery',
    reading: 'アドクラス。class を追加するメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の addClass。要素の class 属性に名前を追加します。',
    summary: 'HTML の部品に class 名を追加します。追加した名前に対応する CSS があると、見た目や状態の表示が変わります。',
    purpose: [
      '選ばれた、勝った、などの状態を、部品へ印として残したいときに使います。',
      'class は、CSS がどの見た目を当てるかを決める名前の一覧です。名前を足しても、対応する CSS が無ければ見た目は変わりません。style をその場で書くことでも色は変えられます。',
      'このじゃんけんでは、選んだ手のボタンに is-selected を追加し、判定が勝ちなら is-win、負けなら is-lose、引き分けなら is-draw を追加しています。',
    ],
    usage: '部品.addClass(\'class名\') と書きます。addClass が追加する作業、() の中が足す名前です。すでに同じ名前があれば、二重には追加しません。部品そのものを新しく作る作業ではありません。',
    example: "$('.hand-button').filter(function () {\n  return $(this).attr('data-hand') === hand;\n}).addClass('is-selected').attr('aria-pressed', 'true');",
    walkthrough: [
      { part: "$('.hand-button')", text: '三つの手のボタンをまとめます。' },
      { part: '.filter(...)', text: 'data-hand が今の手と一致するボタンだけを、次の操作の対象として選びます。' },
      { part: ".addClass('is-selected')", text: '残ったボタンの class 一覧へ、is-selected という名前を追加します。' },
      { part: 'CSS の .hand-button.is-selected', text: 'この名前があるボタンは、枠線と文字の色がアクセントカラーになります。' },
    ],
    result: [
      'グーを選ぶと、グーのボタンだけに is-selected が付きます。枠線と文字がアクセントカラーになります。',
      'チョキとパーのボタンは、この行では class を追加しません。',
    ],
    similar: [
      {
        name: '.removeClass()',
        text: 'どちらも class 名の一覧を変えます。.addClass() は名前を足し、.removeClass() は名前を外します。ボタン自体の追加や削除ではありません。',
      },
    ],
    related: [
      {
        name: '.filter()',
        text: '三つのボタンから、選ばれた一つだけを次の操作の対象として選んでから、class を追加しています。',
      },
    ],
    alternatives: [
      {
        name: 'style を直接書く',
        text: 'ボタンの色を、その場で色の値として指定することもできます。このアプリは class 名だけを足し、色は CSS に書いています。',
      },
    ],
  },
  {
    name: '.removeClass()',
    kind: 'jQuery',
    reading: 'リムーブクラス。class を外すメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の removeClass。要素の class 属性から名前を外します。',
    summary: 'HTML の部品から、指定した class 名だけを外します。部品そのものはページに残ります。',
    purpose: [
      '前の選択や前の勝敗の見た目を消してから、新しい状態を付けたいときに使います。',
      '外さないと、前回グーを選んだ印が残ったまま、次にパーも選ばれた色になります。class 名を空にすることでも印は消せますが、関係のない class まで消えることがあります。',
      'このじゃんけんでは、新しい手を表示する前に三つのボタンから is-selected を外します。判定を出す前には is-win、is-lose、is-draw を外しています。',
    ],
    usage: '部品.removeClass(\'class名\') と書きます。スペースで区切ると、複数の名前を一度に外せます。指定した名前が無くても、エラーにはならず、その名前は外れたままです。要素をページから消す作業ではありません。',
    example: "$('.hand-button').removeClass('is-selected').attr('aria-pressed', 'false');\n$judgment.removeClass('is-win is-lose is-draw');",
    walkthrough: [
      { part: "$('.hand-button')", text: '三つの手のボタンです。' },
      { part: ".removeClass('is-selected')", text: '各ボタンの class 一覧から is-selected だけを外します。ボタンは残ります。' },
      { part: 'is-win is-lose is-draw', text: '判定の表示から、勝ち、負け、引き分けの三つの色の名前を一度に外します。' },
    ],
    result: [
      '前にグーが選ばれていても、この行のあと三つのボタンはすべて通常の色に戻ります。',
      'そのあと、新しい手のボタンだけに is-selected を追加します。',
      '判定が前に「勝ち」の色でも、色の class を外したあと、新しい結果の class だけが付きます。',
    ],
    similar: [
      {
        name: '.addClass()',
        text: 'class 名の一覧を変える点は同じです。removeClass は外す、addClass は足す、という逆の作業です。',
      },
    ],
    related: [
      {
        name: '.addClass()',
        text: '一度すべての選択を外してから、今回のボタンだけへ is-selected を追加しています。',
      },
    ],
    alternatives: [
      {
        name: 'class を空にする',
        text: 'class 属性を空文字にすると、付いていた名前はすべて消えます。このアプリは、消したい名前だけを removeClass で指定しています。',
      },
    ],
  },
  {
    name: '.filter()',
    kind: 'jQuery',
    reading: 'フィルター。選んだ部品を条件で絞るメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の filter。マッチした要素のうち、条件に合うものだけを次の操作の対象にします。',
    summary: 'すでに選んである複数の要素から、条件に合う要素だけを次の操作の対象として選びます。条件に合わない要素がページから消えるわけではありません。',
    purpose: [
      'まとめて見つけた部品のうち、一部だけに次の作業をしたいときに使います。',
      '三つのボタン全部へ「選ばれた」印を付けると、どれを押したか分かりません。条件に合う一つだけを、次の addClass の対象にします。',
      'このじゃんけんでは、data-hand が今押した手と一致するボタンだけを次の操作の対象として選び、そのボタンに is-selected を追加しています。',
    ],
    usage: '部品.filter(function () { return 選ぶなら true; }) と書きます。function () { } は名前の無い関数で、選んである要素ごとに一回ずつ実行されます。関数の中の this は、今調べている要素そのものです。$(this) と書くと、その要素を jQuery で操作できます。return が true の要素だけが、次の操作の対象になります。',
    example: "$('.hand-button').filter(function () {\n  return $(this).attr('data-hand') === hand;\n}).addClass('is-selected').attr('aria-pressed', 'true');",
    walkthrough: [
      { part: "$('.hand-button')", text: 'グー、チョキ、パーの三つのボタンをまとめます。' },
      { part: '.filter', text: 'その三つの中から、条件に合う要素だけを次の操作の対象として選びます。' },
      { part: 'function () { }', text: 'ボタンごとに実行される、名前の無い関数です。' },
      { part: 'this', text: '今調べているボタン自身です。一回目はグー、次はチョキ、次はパーのボタンになります。' },
      { part: "$(this).attr('data-hand') === hand", text: 'そのボタンの data-hand が、押した手と完全に同じなら true です。' },
      { part: '.addClass(\'is-selected\')', text: 'true だったボタンだけに、選ばれた印を追加します。' },
    ],
    result: [
      'hand が「チョキ」なら、チョキのボタンだけが次の操作の対象になります。そのボタンに is-selected が付き、aria-pressed は true になります。',
      'グーとパーのボタンは次の addClass の対象から外れますが、ページ上のボタンとしては残っています。',
    ],
    similar: [
      {
        name: '$()',
        text: '$() はページの中から部品を見つける役です。.filter() は、見つけた結果を条件でもう一度絞る役です。',
      },
    ],
    related: [
      {
        name: '.attr()、===、.addClass()',
        text: '各ボタンの data-hand を読み、押した手と === で比べ、残ったボタンへ class を追加しています。',
      },
    ],
    alternatives: [
      {
        name: '三つのボタンを if で別々に書く',
        text: 'グー用、チョキ用、パー用と分けても、同じ一つのボタンを選べます。ボタンが増えても data-hand の比較だけで済むので、.filter() を使っています。',
      },
    ],
  },
];

function appendCatalogPieces($block, value) {
  if (!value) {
    return;
  }
  const pieces = Array.isArray(value) ? value : [value];
  pieces.forEach(function (piece) {
    if (typeof piece === 'string') {
      $block.append($('<p>', { class: 'catalog-text', text: piece }));
      return;
    }
    if (piece.title) {
      $block.append($('<p>', { class: 'catalog-text', text: piece.title }));
    }
    if (piece.code) {
      $block.append($('<pre>', { class: 'catalog-example', text: piece.code }));
    }
    if (piece.note) {
      $block.append($('<p>', { class: 'catalog-text', text: piece.note }));
    }
  });
}

function appendCatalogBlock($parent, label, text) {
  const $block = $('<div>', { class: 'catalog-block' });
  $block.append($('<p>', { class: 'catalog-label', text: label }));
  appendCatalogPieces($block, text);
  $parent.append($block);
}

function appendCatalogLines($parent, label, lines) {
  if (!lines || lines.length === 0) {
    return;
  }
  const $block = $('<div>', { class: 'catalog-block' });
  $block.append($('<p>', { class: 'catalog-label', text: label }));
  lines.forEach(function (line) {
    if (typeof line === 'string') {
      $block.append($('<p>', { class: 'catalog-text', text: line }));
      return;
    }
    if (line.code) {
      appendCatalogPieces($block, line);
      return;
    }
    const $line = $('<p>', { class: 'catalog-text' });
    $line.append($('<span>', { class: 'catalog-code', text: line.part }));
    $line.append(document.createTextNode('：' + line.text));
    $block.append($line);
  });
  $parent.append($block);
}

function appendCatalogRelations($parent, label, items) {
  if (!items || items.length === 0) {
    return;
  }
  const $block = $('<div>', { class: 'catalog-block' });
  $block.append($('<p>', { class: 'catalog-label', text: label }));
  items.forEach(function (item) {
    $block.append($('<p>', { class: 'catalog-text', text: item.name + '：' + item.text }));
    if (item.code) {
      $block.append($('<pre>', { class: 'catalog-example', text: item.code }));
    }
    appendCatalogPieces($block, item.after);
  });
  $parent.append($block);
}

function createCatalogItem(item) {
  const $item = $('<div>', { class: 'catalog-item' });
  const $button = $('<button>', {
    type: 'button',
    class: 'catalog-toggle',
    'aria-expanded': 'false',
  });
  $button.append($('<span>', { class: 'catalog-name', text: item.name }));
  $button.append($('<span>', { class: 'catalog-kind', text: item.kind }));
  $button.append($('<span>', { class: 'catalog-summary', text: item.summary }));

  $button.on('click', function () {
    const expanded = $button.attr('aria-expanded') === 'true';
    $('.catalog-item').removeClass('is-open');
    $('.catalog-toggle').attr('aria-expanded', 'false');
    if (expanded) {
      $('.code-catalog').removeClass('is-open');
      $('.catalog-detail').empty();
      return;
    }
    $item.addClass('is-open');
    $button.attr('aria-expanded', 'true');
    $('.code-catalog').addClass('is-open');
    renderCatalogDetail(item);
  });

  $item.append($button);
  return $item;
}

function renderCatalogDetail(item) {
  const $detail = $('.catalog-detail');
  $detail.empty();
  appendCatalogLines($detail, 'コード名・分類・読み方・正式名称', [
    'コード名：' + item.name,
    '分類：' + item.kind,
    '読み方：' + item.reading,
    '正式名称：' + item.officialName,
  ]);
  appendCatalogBlock($detail, '一言でいうと', [item.summary].concat(item.summaryMore || []));
  const $exampleBlock = $('<div>', { class: 'catalog-block' });
  $exampleBlock.append($('<p>', { class: 'catalog-label', text: '実際のコード例' }));
  if (item.examples) {
    appendCatalogPieces($exampleBlock, item.exampleIntro);
    appendCatalogPieces($exampleBlock, item.examples);
  } else {
    if (item.exampleNote) {
      $exampleBlock.append($('<p>', { class: 'catalog-text', text: item.exampleNote }));
    }
    $exampleBlock.append($('<pre>', { class: 'catalog-example', text: item.example }));
  }
  $detail.append($exampleBlock);
  appendCatalogLines($detail, 'コードの読み方', item.walkthrough);
  appendCatalogLines($detail, '実行するとどうなるのか', item.result);
  appendCatalogLines($detail, '何のために使うのか', item.purpose);
  appendCatalogBlock($detail, '使い方', item.usage);
  appendCatalogRelations($detail, '似た役割のコード', item.similar);
  appendCatalogRelations($detail, '関連するコード', item.related);
  appendCatalogRelations($detail, '別の書き方', item.alternatives);
  $detail.scrollTop(0);
}

const codeCatalogLevel2 = [
  {
    name: 'const',
    kind: 'JavaScript',
    reading: 'コンスト。定数の宣言として、こう呼ばれることが多いです。',
    officialName: '定数。同じ変数に別の値を入れ直せない宣言です。',
    summary: 'タスクの並びに名前を付けます。名前自体は入れ替えず、中のタスクは追加したり書き換えたりします。',
    purpose: [
      '同じ並びを、追加や完了の切り替えのたびに名前で指すために使います。',
      'const でも、配列の中身を増やすことや、中の done を書き換えることはできます。',
      'このタスク管理では、tasks という名前でタスクの並びを覚えています。',
    ],
    usage: 'const 名前 = 最初の値 と書きます。',
    example: "const tasks = [\n  { title: 'こわそう', done: false },\n  { title: 'つくろう', done: false },\n  { title: 'ジブンを', done: false },\n  { title: 'セカイを', done: false },\n];",
    walkthrough: [
      { part: 'const tasks', text: 'タスクの並びに tasks という名前を付け、この名前は入れ直しません。' },
      { part: '[ ]', text: '複数のタスクを順番に並べます。' },
      { part: '{ title, done }', text: '1件のタスクです。名前と、完了したかどうかが入っています。' },
    ],
    result: [
      'このあと tasks と書くと、この4件の並びを指します。',
      'tasks.push(task) で5件目を足せます。tasks という名前自体は変わりません。',
    ],
    similar: [],
    related: [
      { name: '[] と {}', text: '[] が並び、{} が1件のタスクです。' },
    ],
    alternatives: [],
  },
  {
    name: '[]',
    kind: 'JavaScript',
    reading: '角括弧。配列を作るときはこう呼ばれます。',
    officialName: '配列リテラル。複数の値を順番に並べて管理する書き方です。',
    summary: 'タスクを順番に並べて管理します。最初の番号は 0 です。',
    purpose: [
      '件数の増減や、何番目かを指定して取り出したいときに使います。',
      'このタスク管理では、追加のたびに末尾へ1件足します。',
    ],
    usage: '[値1, 値2] と書きます。値のあいだはカンマです。',
    example: "const tasks = [\n  { title: 'こわそう', done: false },\n  { title: 'つくろう', done: false },\n  { title: 'ジブンを', done: false },\n  { title: 'セカイを', done: false },\n];",
    walkthrough: [
      { part: '[', text: '並びの開始です。' },
      { part: '0番', text: 'こわそう、が最初のタスクです。' },
      { part: '1番', text: 'つくろう、が2件目です。番号は1からではなく0からです。' },
    ],
    result: [
      'tasks[0] は「こわそう」、tasks[1] は「つくろう」です。',
    ],
    similar: [
      { name: '{}', text: '{} は1件の中身を名前で管理します。[] は何件かを順番で管理します。' },
    ],
    related: [
      { name: '[番号]、length、push()', text: '番号で取り出し、length で個数を知り、push() で末尾に足します。' },
    ],
    alternatives: [],
  },
  {
    name: '{}',
    kind: 'JavaScript',
    reading: '波括弧。データのまとまりを作るときはこう呼ばれます。',
    officialName: 'オブジェクトリテラル。名前の付いた値を一つにまとめる書き方です。',
    summary: '1件のタスクを、名前と完了したかどうかの組にします。',
    purpose: [
      '一つのものに、複数の情報を持たせたいときに使います。',
      'このタスク管理では、title が表示する文字、done が完了したかどうかです。',
    ],
    usage: '{ 名前: 値, 名前: 値 } と書きます。名前と値の間はコロンです。',
    example: "const task = {\n  title: title,\n  done: false,\n};",
    walkthrough: [
      { part: 'title: title', text: 'title という名前で、入力された文字を入れます。' },
      { part: 'done: false', text: 'まだ完了していない、という true / false の値です。' },
    ],
    result: [
      'task.title で名前、task.done で完了したかどうかを読めます。',
      '追加した直後の done は false です。',
    ],
    similar: [
      { name: '[]', text: '[] は順番、{} は名前で中の値を指定します。' },
    ],
    related: [
      { name: '.名前', text: 'まとめたあとは task.title や task.done と書いて取り出します。' },
    ],
    alternatives: [],
  },
  {
    name: '.名前',
    kind: 'JavaScript',
    reading: 'ドット。ドット記法とも呼ばれます。',
    officialName: 'プロパティアクセス。オブジェクトの中の値を名前で指定する書き方です。',
    summary: 'タスクの中から、名前または完了したかどうかを取り出します。',
    purpose: [
      '1件にまとめた情報のうち、必要なものだけを使いたいときに書きます。',
      'このタスク管理では、画面に出す文字は title、取り消し線の判断は done です。',
    ],
    usage: 'データ.名前 と書きます。',
    example: "const title = task.title;\nconst done = task.done;",
    exampleNote: '説明用の例です。アプリでは task.title を画面の文字に、task.done をチェックと取り消し線に使っています。',
    walkthrough: [
      { part: 'task', text: '1件のタスクです。' },
      { part: '.title', text: 'その中の、表示する文字です。' },
      { part: '.done', text: '完了していれば true、まだなら false です。' },
    ],
    result: [
      '「こわそう」のタスクなら、title は「こわそう」、done は false です。',
    ],
    similar: [],
    related: [
      { name: '{}', text: 'ドットの右の名前は、{} でタスクを作ったときの名前です。' },
    ],
    alternatives: [],
  },
  {
    name: '[番号]',
    kind: 'JavaScript',
    reading: '添字、またはインデックス。',
    officialName: 'インデックスアクセス。並びの指定した位置の値を取り出します。',
    summary: 'タスクの並びの何番目かを指定して、その1件を取り出します。最初は 0 番です。',
    purpose: [
      'チェックされたタスクだけを書き換えたいときに使います。',
      'このタスク管理では、チェックボックスの data-index を番号にして tasks[index] を書き換えます。',
    ],
    usage: '並び[番号] と書きます。番号は 0 から始まります。',
    example: 'tasks[index].done = done;',
    walkthrough: [
      { part: 'tasks', text: 'タスクを並べた配列です。' },
      { part: '[index]', text: 'index 番目の1件です。0 なら最初のタスクです。' },
      { part: '.done = done', text: 'そのタスクの完了状態を、チェックの true / false に書き換えます。' },
    ],
    result: [
      'index が 1 で done が true なら、2件目の「つくろう」の done が true になります。',
    ],
    similar: [],
    related: [
      { name: 'data-index', text: 'チェックボックスを作るとき、その番号を data-index に書いています。' },
    ],
    alternatives: [],
  },
  {
    name: 'length',
    kind: 'JavaScript',
    reading: 'レングス。長さとしてこう呼ばれます。',
    officialName: 'length プロパティ。配列では、入っている値の個数です。',
    summary: 'タスクが今何件あるかを表します。',
    purpose: [
      '追加したあとに、末尾の番号を知るために使います。最後の番号は length - 1 です。',
      'このタスク管理では、push した直後の tasks.length - 1 を、新しいタスクの番号にしています。',
    ],
    usage: '並び.length と書きます。() は付けません。',
    example: 'tasks.push(task);\nreturn tasks.length - 1;',
    walkthrough: [
      { part: 'tasks.push(task)', text: '末尾に1件足します。4件なら5件になります。' },
      { part: 'tasks.length - 1', text: '足したあとの個数から1を引くと、今足したタスクの番号です。' },
    ],
    result: [
      '4件の状態で1件足すと length は 5、返る番号は 4 です。',
    ],
    similar: [],
    related: [
      { name: 'push()', text: 'length は push() で1件足すたびに1増えます。' },
    ],
    alternatives: [],
  },
  {
    name: 'push()',
    kind: 'JavaScript',
    reading: 'プッシュ。配列の末尾に加えるメソッドとしてこう呼ばれます。',
    officialName: 'Array.prototype.push。配列の末尾に値を追加します。',
    summary: 'タスクの並びの最後に、新しい1件を足します。',
    purpose: [
      'すでに並んでいるタスクを残したまま、新しいタスクを追加したいときに使います。',
      'このタスク管理では、入力から作ったタスクを tasks の末尾に足します。',
    ],
    usage: '並び.push(足す値) と書きます。',
    example: 'function addTaskToList(task) {\n  tasks.push(task);\n  return tasks.length - 1;\n}',
    walkthrough: [
      { part: 'task', text: '追加する1件です。title と done が入っています。' },
      { part: 'tasks.push(task)', text: 'その1件を並びの最後に足します。' },
      { part: 'return', text: '足したタスクの番号を、呼んだ場所へ返します。' },
    ],
    result: [
      '実行前の tasks.length が 4 なら、実行後は 5 です。新しいタスクは tasks[4] です。',
    ],
    similar: [],
    related: [
      { name: '[] と length', text: '足す先は配列で、足したあとの個数は length で分かります。' },
    ],
    alternatives: [],
  },
  {
    name: 'true / false',
    kind: 'JavaScript',
    reading: 'トゥルー / フォルス。真偽値としてこう呼ばれます。',
    officialName: '真偽値。条件を調べた結果や、完了したかどうかを表す値です。',
    summary: '完了していれば true、まだなら false です。はい・いいえのような二つの状態を表します。',
    purpose: [
      '二つの状態しかないものを、文字ではなくこの値で持っておきたいときに使います。',
      'このタスク管理では、done とチェックボックスの状態を true / false で持っています。',
    ],
    usage: 'true または false と、小文字で書きます。',
    example: 'const task = {\n  title: title,\n  done: false,\n};',
    walkthrough: [
      { part: 'done: false', text: '追加した直後は、まだ完了していません。' },
      { part: 'true', text: 'チェックを付けると、done を true に書き換えます。' },
    ],
    result: [
      'done が false のタスクには取り消し線が付きません。',
      'done が true のタスクには取り消し線が付きます。最初の4件はどれも done が false なので、開いた直後は取り消し線がありません。',
    ],
    similar: [],
    related: [
      { name: 'if と ===', text: 'done === true のように比べて、取り消し線を付けるかを決めています。' },
    ],
    alternatives: [],
  },
  {
    name: 'if',
    kind: 'JavaScript',
    reading: 'イフ。条件分岐としてこう呼ばれます。',
    officialName: 'if 文。条件を調べた結果が true のときだけ、中の処理を実行します。',
    summary: '完了しているときだけ取り消し線を付け、空欄のときはタスクを追加しません。',
    purpose: [
      '状態によって、次にやること変えるときに使います。',
      'このタスク管理では、空欄なら追加をやめ、done が true のときだけ class を足します。',
    ],
    usage: 'if (条件) { 結果が true のときの処理 } と書きます。',
    example: "if (task.done === true) {\n  $title.addClass('is-done');\n}",
    walkthrough: [
      { part: 'task.done === true', text: '完了していれば true、まだなら false です。' },
      { part: ".addClass('is-done')", text: 'true のときだけ、取り消し線用の class を足します。' },
    ],
    result: [
      'done が true のタスクは、名前に取り消し線が付きます。',
      'done が false のタスクは、この if の中を実行しません。',
    ],
    similar: [],
    related: [
      { name: '=== と true / false', text: 'if が受け取るのは、=== が返した true か false です。' },
    ],
    alternatives: [],
  },
  {
    name: '===',
    kind: 'JavaScript',
    reading: 'トリプルイコール、またはイコール三つ。',
    officialName: '厳密等価演算子。型も値も同じかを調べます。',
    summary: '二つの値が同じ種類で、内容も同じかを調べます。結果は true か false です。',
    purpose: [
      '空欄かどうか、完了しているかどうかを確かめるときに使います。',
      'このタスク管理では、空白を除いた文字が空文字かどうかと、done が true かどうかを調べています。',
    ],
    usage: '左 === 右 と書きます。同じなら true、違えば false です。',
    example: "return title.trim() === '';",
    walkthrough: [
      { part: 'title.trim()', text: '前後の空白を除いた文字です。' },
      { part: "=== ''", text: '空の文字と完全に同じなら true です。' },
    ],
    result: [
      '入力が「こわそう」なら false です。追加を続けます。',
      '入力が空、または空白だけなら true です。タスクは追加しません。',
    ],
    similar: [],
    related: [
      { name: 'if', text: '=== の結果を if で受け取り、追加を続けるか止めるかを決めています。' },
    ],
    alternatives: [],
  },
  {
    name: '$()',
    kind: 'jQuery',
    reading: 'ダラー。jQuery の関数としてこう呼ばれます。',
    officialName: 'jQuery 関数。HTML の部品を選び、jQuery で操作できる形にします。',
    summary: '入力欄やタスクの一覧を指定して、文字の読み書きや部品の追加ができるようにします。',
    purpose: [
      'HTML に書いた部品を、JavaScript から操作したいときに使います。',
      'このタスク管理では、入力欄、一覧、チェックボックスを探すために使っています。',
    ],
    usage: "$('CSSの指定') と書きます。.task-input は class が task-input の部品です。",
    example: "$('.task-input')\n$('.task-list')",
    walkthrough: [
      { part: '$', text: 'jQuery の関数です。JavaScript から使う追加の道具です。' },
      { part: "'.task-input'", text: 'タスク名を書く入力欄です。' },
      { part: "'.task-list'", text: 'タスクを並べて表示する一覧です。' },
    ],
    result: [
      'この2行だけでは画面は変わりません。見つけた結果に .val() や .append() を続けて操作します。',
    ],
    similar: [],
    related: [
      { name: '.val()、.append()、.text()', text: '$() で見つけた部品に、これらの操作を続けています。' },
    ],
    alternatives: [],
  },
  {
    name: '.val()',
    kind: 'jQuery',
    reading: 'バル。入力欄の値を読む、または入れるメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の val。フォーム部品の値を取得または設定します。',
    summary: '入力欄に書かれている文字を読みます。引数を渡すと、その文字を入力欄に入れます。',
    purpose: [
      '利用者が入力した文字を、タスクの名前にしたいときに使います。',
      'このタスク管理では、追加のときに入力欄の文字を読んでいます。',
    ],
    usage: "部品.val() と引数なしで書くと、今の文字を返します。部品.val('文字') と書くと、その文字に入れ替えます。",
    example: "function readTaskTitle() {\n  const title = $('.task-input').val();\n  return title;\n}",
    walkthrough: [
      { part: "$('.task-input')", text: 'タスク名の入力欄を見つけます。' },
      { part: '.val()', text: '引数がないので、今入っている文字を読みます。' },
      { part: 'return title', text: '読んだ文字を、この関数を呼んだ場所へ返します。' },
    ],
    result: [
      '入力欄が「ジブンを」なら、title はその文字です。',
      '空欄なら、title は空の文字です。',
    ],
    similar: [],
    related: [
      { name: '===', text: '読んだ文字が空かどうかを === で調べ、空なら追加しません。' },
    ],
    alternatives: [],
  },
  {
    name: '.text()',
    kind: 'jQuery',
    reading: 'テキスト。文字を入れるメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の text。要素のテキストを設定します。',
    summary: 'タスクの名前を、画面に見える文字として入れます。入力された文字は HTML としては解釈しません。',
    purpose: [
      '利用者が入力した文字を、そのまま画面に出したいときに使います。',
      'このタスク管理では、task.title を一覧の名前にしています。',
    ],
    usage: '部品を作るときに text: 文字 と指定すると、その文字を中身にします。',
    example: "const $title = $('<span>', {\n  class: 'task-title',\n  text: task.title,\n});",
    walkthrough: [
      { part: '$(\'<span>\')', text: '名前を表示する新しい部品を作ります。' },
      { part: 'text: task.title', text: 'タスクの名前を、その部品の文字にします。' },
    ],
    result: [
      'task.title が「こわそう」なら、一覧にその文字が表示されます。',
      '<b> のような文字を入力しても、太字にはならず、入力したままの文字として表示されます。',
    ],
    similar: [],
    related: [
      { name: '.append()', text: '作った名前の部品を、一覧の1行に追加しています。' },
    ],
    alternatives: [],
  },
  {
    name: '.append()',
    kind: 'jQuery',
    reading: 'アペンド。末尾に追加するメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の append。要素の中の最後に、別の要素を追加します。',
    summary: 'チェックボックスと名前を1行にまとめ、その行を一覧の最後に足します。',
    purpose: [
      '新しく作った部品を、画面の指定した場所へ出したいときに使います。',
      'このタスク管理では、1件のタスクを一覧の末尾に表示します。',
    ],
    usage: '親.append(足す部品) と書きます。足した部品は、親の中の最後に入ります。',
    example: "$item.append($check);\n$item.append($title);\n$('.task-list').append($item);",
    walkthrough: [
      { part: '$item.append($check)', text: '1行の中に、チェックボックスを入れます。' },
      { part: '$item.append($title)', text: 'そのうしろに、タスクの名前を入れます。' },
      { part: "$('.task-list').append($item)", text: 'できた1行を、一覧の最後に足します。' },
    ],
    result: [
      '一覧の最後に、チェックボックスと名前が1行増えます。',
      'すでにあるタスクの行は消えません。',
    ],
    similar: [],
    related: [
      { name: 'push()', text: 'push() が配列の末尾に足し、.append() が一覧の末尾に表示します。' },
    ],
    alternatives: [],
  },
  {
    name: '.addClass()',
    kind: 'jQuery',
    reading: 'アドクラス。class を追加するメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の addClass。要素の class 属性に名前を追加します。',
    summary: '完了したタスクの名前に is-done を追加します。CSS が、その名前に取り消し線を付けています。',
    purpose: [
      '完了した見た目を、class 名で切り替えたいときに使います。',
      'このタスク管理では、done が true のタスクに is-done を付けます。',
    ],
    usage: "部品.addClass('class名') と書きます。部品自体は消えません。",
    example: "if (task.done === true) {\n  $title.addClass('is-done');\n}",
    walkthrough: [
      { part: 'task.done === true', text: '完了しているときだけ、次の行を実行します。' },
      { part: ".addClass('is-done')", text: '名前の部品に is-done を足します。' },
    ],
    result: [
      'is-done が付いた名前は、文字色が補助色になり、取り消し線が付きます。',
      '開いた直後の4件は done が false なので、取り消し線は付いていません。チェックを付けると is-done が付き、取り消し線が付きます。',
    ],
    similar: [
      { name: '.removeClass()', text: 'addClass は class を足し、removeClass は外します。どちらもタスクの行自体は残します。' },
    ],
    related: [
      { name: 'true / false', text: 'done が true のときだけ class を足しています。' },
    ],
    alternatives: [],
  },
  {
    name: '.removeClass()',
    kind: 'jQuery',
    reading: 'リムーブクラス。class を外すメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の removeClass。要素の class 属性から名前を外します。',
    summary: '未完了に戻したタスクの名前から、is-done だけを外します。行自体は残ります。',
    purpose: [
      '完了の取り消し線を消したいときに使います。',
      'このタスク管理では、done が false のときに is-done を外します。',
    ],
    usage: "部品.removeClass('class名') と書きます。",
    example: "$title.removeClass('is-done');",
    exampleNote: 'showTask の中で、done が true でないときに実行している行です。',
    walkthrough: [
      { part: '$title', text: 'タスクの名前を表示している部品です。' },
      { part: ".removeClass('is-done')", text: '取り消し線用の class だけを外します。' },
    ],
    result: [
      '取り消し線が消え、文字色は通常の白に戻ります。',
      'チェックを外すと、done は false になり、この行が実行されます。',
    ],
    similar: [
      { name: '.addClass()', text: '同じ class 名を、足すか外すかの違いです。' },
    ],
    related: [
      { name: '.addClass()', text: '完了なら足し、未完了なら外しています。' },
    ],
    alternatives: [],
  },
  {
    name: '.prop()',
    kind: 'jQuery',
    reading: 'プロップ。プロパティを読む、または書くメソッドとしてこう呼ばれます。',
    officialName: 'jQuery の prop。DOM 要素のプロパティを取得または設定します。',
    summary: 'チェックボックスが付いているかを、true / false で読みます。',
    purpose: [
      'チェックのような、HTML の表示状態を true / false で受け取りたいときに使います。',
      'このタスク管理では、checked を読んで tasks[index].done に入れています。',
    ],
    usage: "部品.prop('プロパティ名') と一つだけ渡すと、その状態を読みます。",
    example: "function readChecked(event) {\n  const checked = $(event.currentTarget).prop('checked') === true;\n  return checked;\n}",
    walkthrough: [
      { part: 'event.currentTarget', text: '変化したチェックボックスを、event の中から参照します。' },
      { part: ".prop('checked')", text: '付いていれば true、外れていれば false です。' },
      { part: '=== true', text: '結果を true か false にそろえています。' },
    ],
    result: [
      'チェックを付けると checked は true です。対応するタスクの done も true になります。',
      'チェックを外すと checked は false です。done も false になります。',
    ],
    similar: [],
    related: [
      { name: 'event.currentTarget と [番号]', text: 'どのチェックボックスかを currentTarget から知り、その番号の done を書き換えます。' },
    ],
    alternatives: [],
  },
  {
    name: 'event.currentTarget',
    kind: 'JavaScript',
    reading: 'イベント ドット カレントターゲット。',
    officialName: 'Event.currentTarget。イベントを受け取るよう登録した要素です。',
    summary: 'チェックの変化を登録した要素を、event の中から参照します。',
    purpose: [
      '一覧のどのチェックボックスが変わったかを知るために使います。',
      'このタスク管理では、そこから data-index と checked を読んでいます。',
    ],
    usage: '変化が起きた関数には event が渡されます。event.currentTarget がその要素です。ボタン自体が引数として渡されるわけではありません。',
    example: "const checked = $(event.currentTarget).prop('checked') === true;\nconst index = Number($(event.currentTarget).attr('data-index'));",
    walkthrough: [
      { part: 'event', text: 'チェックが変化したことに関する情報です。' },
      { part: '.currentTarget', text: '変化を受け取るよう登録したチェックボックスを参照します。' },
      { part: 'data-index', text: 'そのチェックボックスに書いてある、配列の番号です。' },
    ],
    result: [
      '2件目の「つくろう」のチェックを変えると、index は 1 です。tasks[1] の done を書き換えます。',
    ],
    similar: [],
    related: [
      { name: '.prop() と [番号]', text: 'currentTarget からチェック状態と番号を読み、その番号のタスクを書き換えます。' },
    ],
    alternatives: [],
  },
];

function renderCatalogForLevel(level) {
  const $list = $('.catalog-list');
  if ($list.length === 0) {
    return;
  }
  const items = level === '2' ? codeCatalogLevel2 : codeCatalog;
  $list.empty();
  $('.catalog-detail').empty();
  $('.code-catalog').removeClass('is-open');
  items.forEach(function (item) {
    $list.append(createCatalogItem(item));
  });
}

$(function () {
  if (typeof renderCatalogForLevel === 'function' && $('.catalog-list').children().length === 0) {
    renderCatalogForLevel('2');
  }
});
