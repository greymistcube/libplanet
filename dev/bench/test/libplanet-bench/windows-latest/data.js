window.BENCHMARK_DATA = {
  "lastUpdate": 1700974958737,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "0fcd4d7b6b8719507c713585f521d4de60ba5f70",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-25T17:34:56+09:00",
          "tree_id": "cff9a84c80c43d1a30d8377791ae1ddd00e5e020",
          "url": "https://github.com/greymistcube/libplanet/commit/0fcd4d7b6b8719507c713585f521d4de60ba5f70"
        },
        "date": 1700901917304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981480.412371134,
            "unit": "ns",
            "range": "± 78913.80403006084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1727090.5405405406,
            "unit": "ns",
            "range": "± 86102.58483211932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1393549,
            "unit": "ns",
            "range": "± 144179.6014481153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5376576,
            "unit": "ns",
            "range": "± 215309.82688930398"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33825.42372881356,
            "unit": "ns",
            "range": "± 1499.1484042775505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5092792.857142857,
            "unit": "ns",
            "range": "± 34179.08636951762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13363458.333333334,
            "unit": "ns",
            "range": "± 81593.71030052537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32006200,
            "unit": "ns",
            "range": "± 255565.98124404345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65483500,
            "unit": "ns",
            "range": "± 407137.1116617935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129696620,
            "unit": "ns",
            "range": "± 1137858.5426769257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314977.96875,
            "unit": "ns",
            "range": "± 4526.621714579527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1001021.1197916666,
            "unit": "ns",
            "range": "± 1429.8214811210394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 699055.3841145834,
            "unit": "ns",
            "range": "± 1220.1522891491725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908273.73046875,
            "unit": "ns",
            "range": "± 2786.962296363766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611130.8733258928,
            "unit": "ns",
            "range": "± 814.1673937398804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553682.32421875,
            "unit": "ns",
            "range": "± 1594.239585556879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2130520.7792207794,
            "unit": "ns",
            "range": "± 108417.89439802185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2210567.6470588236,
            "unit": "ns",
            "range": "± 32653.383699444887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2780758.695652174,
            "unit": "ns",
            "range": "± 66454.95338979275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2768388.2352941176,
            "unit": "ns",
            "range": "± 88585.52027759419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6323051.612903226,
            "unit": "ns",
            "range": "± 150317.87401141567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177484.2105263158,
            "unit": "ns",
            "range": "± 13241.619716679852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159475.34246575343,
            "unit": "ns",
            "range": "± 7913.943054682346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142065.9090909091,
            "unit": "ns",
            "range": "± 5261.883259195685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2726666.6666666665,
            "unit": "ns",
            "range": "± 35646.271427270854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2430576.923076923,
            "unit": "ns",
            "range": "± 26715.449769941297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9647.777777777777,
            "unit": "ns",
            "range": "± 1341.7436063267087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49710.9756097561,
            "unit": "ns",
            "range": "± 2599.33543726991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42640.32258064516,
            "unit": "ns",
            "range": "± 1944.2609685708305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48003.15789473684,
            "unit": "ns",
            "range": "± 7539.180674367839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2246.590909090909,
            "unit": "ns",
            "range": "± 375.2237228844359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9532.58426966292,
            "unit": "ns",
            "range": "± 1095.0067746675938"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "a22af937ed76ef36db3ba0b1294f939dc8193d48",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-26T13:49:27+09:00",
          "tree_id": "a45679a776e3de07e65041cfde1b71ad9fcacfba",
          "url": "https://github.com/greymistcube/libplanet/commit/a22af937ed76ef36db3ba0b1294f939dc8193d48"
        },
        "date": 1700974931468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1102882.6530612244,
            "unit": "ns",
            "range": "± 139064.76354155308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1893238.5714285714,
            "unit": "ns",
            "range": "± 91565.90925153335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519028.2828282828,
            "unit": "ns",
            "range": "± 151428.31673860256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5254889.47368421,
            "unit": "ns",
            "range": "± 180211.0351324227"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41600,
            "unit": "ns",
            "range": "± 4047.0565435470094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5481353.333333333,
            "unit": "ns",
            "range": "± 81299.96368534303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14389550,
            "unit": "ns",
            "range": "± 191532.14130752612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35759807.14285714,
            "unit": "ns",
            "range": "± 397453.90340223146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70948685.71428572,
            "unit": "ns",
            "range": "± 461865.1865527976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142181885.7142857,
            "unit": "ns",
            "range": "± 765145.9386760982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3250938.90625,
            "unit": "ns",
            "range": "± 6768.187493179856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1022583.5416666666,
            "unit": "ns",
            "range": "± 3482.4469148978415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 691483.7262834822,
            "unit": "ns",
            "range": "± 839.6463778579673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999031.953125,
            "unit": "ns",
            "range": "± 10186.844681948822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625686.3411458334,
            "unit": "ns",
            "range": "± 1331.2935343565473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573285.1106770834,
            "unit": "ns",
            "range": "± 2147.990267683941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2379673.6842105263,
            "unit": "ns",
            "range": "± 52126.809503420096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2447000,
            "unit": "ns",
            "range": "± 39121.93954606742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2971491.111111111,
            "unit": "ns",
            "range": "± 111380.41655479293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2858028.3018867923,
            "unit": "ns",
            "range": "± 113298.87360659194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6042507.142857143,
            "unit": "ns",
            "range": "± 210540.10149607866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190691.42857142858,
            "unit": "ns",
            "range": "± 8451.06532787337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183170,
            "unit": "ns",
            "range": "± 9027.446195360379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160858.88888888888,
            "unit": "ns",
            "range": "± 8942.662480196075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2883833.3333333335,
            "unit": "ns",
            "range": "± 47446.89763554721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2600685.714285714,
            "unit": "ns",
            "range": "± 33262.79643045104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15584.946236559139,
            "unit": "ns",
            "range": "± 1880.3298876017764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71610.63829787234,
            "unit": "ns",
            "range": "± 7610.2854578186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63996.969696969696,
            "unit": "ns",
            "range": "± 7306.0703660004465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74617.20430107527,
            "unit": "ns",
            "range": "± 13045.902435630174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3900,
            "unit": "ns",
            "range": "± 914.5605789840163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13088.76404494382,
            "unit": "ns",
            "range": "± 1568.180633890983"
          }
        ]
      }
    ]
  }
}