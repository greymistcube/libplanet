window.BENCHMARK_DATA = {
  "lastUpdate": 1693847809604,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "aa648e7190f598c9d6958fd46da135d82142a85b",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:10:43+09:00",
          "tree_id": "0e30da4a540935e01029fe8a98862a01b934b52b",
          "url": "https://github.com/greymistcube/libplanet/commit/aa648e7190f598c9d6958fd46da135d82142a85b"
        },
        "date": 1693798044446,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716009.6153846155,
            "unit": "ns",
            "range": "± 85783.26415975377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3273935.925925926,
            "unit": "ns",
            "range": "± 89579.03394163937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2200340.2647058824,
            "unit": "ns",
            "range": "± 100498.35366255564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5764632.810810811,
            "unit": "ns",
            "range": "± 194434.05433703077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338383.2083333333,
            "unit": "ns",
            "range": "± 7936.6379749875505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323798.0256410256,
            "unit": "ns",
            "range": "± 11163.030109973157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311105.76923076925,
            "unit": "ns",
            "range": "± 8391.411053250544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5441770.2,
            "unit": "ns",
            "range": "± 42374.93243349017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4873718.333333333,
            "unit": "ns",
            "range": "± 83543.94671383327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25537.20879120879,
            "unit": "ns",
            "range": "± 1948.0511601568685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109620.42857142857,
            "unit": "ns",
            "range": "± 8993.00677445318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92119.22105263158,
            "unit": "ns",
            "range": "± 8217.847337038527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100419.51041666667,
            "unit": "ns",
            "range": "± 13411.178153822822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6794.96875,
            "unit": "ns",
            "range": "± 700.041629636184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23780.633333333335,
            "unit": "ns",
            "range": "± 2216.0720410246677"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60684.79120879121,
            "unit": "ns",
            "range": "± 3469.889663684434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10189879.51724138,
            "unit": "ns",
            "range": "± 296218.3576509084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27517187.266666666,
            "unit": "ns",
            "range": "± 430333.97325888753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69084539,
            "unit": "ns",
            "range": "± 849134.4594848164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137103844.46666667,
            "unit": "ns",
            "range": "± 1826800.1195509231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265346518,
            "unit": "ns",
            "range": "± 4952470.603797637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4354801.333333333,
            "unit": "ns",
            "range": "± 158139.727885626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4676679.230769231,
            "unit": "ns",
            "range": "± 47951.57982999421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5964874.588235294,
            "unit": "ns",
            "range": "± 117609.51516834152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4943801.666666667,
            "unit": "ns",
            "range": "± 172280.55266312644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7694694,
            "unit": "ns",
            "range": "± 199772.97961164985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6095735.034040178,
            "unit": "ns",
            "range": "± 44402.587973126036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857974.7294921875,
            "unit": "ns",
            "range": "± 24768.166241164967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288073.6215122768,
            "unit": "ns",
            "range": "± 16914.183663427488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3083118.7391927084,
            "unit": "ns",
            "range": "± 45187.20600974094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973020.7815104167,
            "unit": "ns",
            "range": "± 12651.500941265296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 897558.9508463541,
            "unit": "ns",
            "range": "± 11877.249680636709"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "caa63db381810757bf0683c4bf33c7dc5a705cbc",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:19:07+09:00",
          "tree_id": "c720e196c10642a1107489dfcedad0ac13713150",
          "url": "https://github.com/greymistcube/libplanet/commit/caa63db381810757bf0683c4bf33c7dc5a705cbc"
        },
        "date": 1693798344377,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1285882.8936170214,
            "unit": "ns",
            "range": "± 73476.97659189125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2452495.238095238,
            "unit": "ns",
            "range": "± 57491.39295486305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1681684.3950617283,
            "unit": "ns",
            "range": "± 84634.6003490415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4494756.9677419355,
            "unit": "ns",
            "range": "± 117580.55203235039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269404.63636363635,
            "unit": "ns",
            "range": "± 7862.177623828933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258825.71698113208,
            "unit": "ns",
            "range": "± 10800.357393262784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232114.9090909091,
            "unit": "ns",
            "range": "± 5631.418453717128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4222154.923076923,
            "unit": "ns",
            "range": "± 55864.38293680739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3908989.2666666666,
            "unit": "ns",
            "range": "± 49367.545829315066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18737.32978723404,
            "unit": "ns",
            "range": "± 1689.7948554519219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86533.43037974683,
            "unit": "ns",
            "range": "± 4339.356491591411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71172.93103448275,
            "unit": "ns",
            "range": "± 2061.7881097143822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78662.61224489796,
            "unit": "ns",
            "range": "± 12510.211683403277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4580.851063829788,
            "unit": "ns",
            "range": "± 490.8357138693239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18376.68085106383,
            "unit": "ns",
            "range": "± 1419.4512510255424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48040.54022988506,
            "unit": "ns",
            "range": "± 2361.9607631411977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7901761.133333334,
            "unit": "ns",
            "range": "± 39289.465525337284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20164793.14285714,
            "unit": "ns",
            "range": "± 71581.93409046635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51303595.78571428,
            "unit": "ns",
            "range": "± 332523.8406745455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102889163.73333333,
            "unit": "ns",
            "range": "± 392650.49212780764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208040873.5,
            "unit": "ns",
            "range": "± 996041.8050967655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3348897.066666667,
            "unit": "ns",
            "range": "± 50592.66084757843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3402784.2666666666,
            "unit": "ns",
            "range": "± 31066.36184609297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4197214.214285715,
            "unit": "ns",
            "range": "± 52697.1687754717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3744145.4482758623,
            "unit": "ns",
            "range": "± 108735.23017619655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6112280.454545454,
            "unit": "ns",
            "range": "± 145034.4098680846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5084220.974609375,
            "unit": "ns",
            "range": "± 4478.654630684207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1577423.49296875,
            "unit": "ns",
            "range": "± 3380.46040840732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1069864.3438802084,
            "unit": "ns",
            "range": "± 809.7035001458544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563647.349739583,
            "unit": "ns",
            "range": "± 2747.908223642917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801140.8076869419,
            "unit": "ns",
            "range": "± 612.4632261380348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 700574.1513020833,
            "unit": "ns",
            "range": "± 699.8532152675041"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "4be7d1da6e8afe4c52f64578875a8f0c0b5200d7",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:53:37+09:00",
          "tree_id": "20a322fc42461e47197f99c18ecb61a0f8e92264",
          "url": "https://github.com/greymistcube/libplanet/commit/4be7d1da6e8afe4c52f64578875a8f0c0b5200d7"
        },
        "date": 1693800466539,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1425236.4719101123,
            "unit": "ns",
            "range": "± 78299.50043105028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2730863.566666667,
            "unit": "ns",
            "range": "± 79447.89546818084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1842450.1666666667,
            "unit": "ns",
            "range": "± 94073.03877699548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4904950.78125,
            "unit": "ns",
            "range": "± 150887.13221899734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276880.375,
            "unit": "ns",
            "range": "± 8159.895897675254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271265.5625,
            "unit": "ns",
            "range": "± 5249.342663213493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249006.35,
            "unit": "ns",
            "range": "± 11076.430800677777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4520254.466666667,
            "unit": "ns",
            "range": "± 37557.84149218883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4107668.6666666665,
            "unit": "ns",
            "range": "± 43204.32832924211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20322.135416666668,
            "unit": "ns",
            "range": "± 1281.1228103322135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88663.16666666667,
            "unit": "ns",
            "range": "± 4037.1351860268956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77910.04545454546,
            "unit": "ns",
            "range": "± 1725.111465750567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88707.15463917526,
            "unit": "ns",
            "range": "± 11983.639689819656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5727.953608247422,
            "unit": "ns",
            "range": "± 675.1741908052715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19977.60824742268,
            "unit": "ns",
            "range": "± 1796.9290734281283"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50571.75555555556,
            "unit": "ns",
            "range": "± 2602.7609813604445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8357754.173913044,
            "unit": "ns",
            "range": "± 189345.76776066973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23224416.533333335,
            "unit": "ns",
            "range": "± 273755.48136504873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57748787.2,
            "unit": "ns",
            "range": "± 460865.1349101414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115122243.6,
            "unit": "ns",
            "range": "± 863486.2286502812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228054633.7142857,
            "unit": "ns",
            "range": "± 1393689.7613608511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3556091.709677419,
            "unit": "ns",
            "range": "± 100398.33758523877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3861026.1578947366,
            "unit": "ns",
            "range": "± 85038.6858260947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4479208.333333333,
            "unit": "ns",
            "range": "± 67251.86016722795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4201615.928571428,
            "unit": "ns",
            "range": "± 64297.23118630595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6470548.647058823,
            "unit": "ns",
            "range": "± 92848.6941810042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5007069.887620192,
            "unit": "ns",
            "range": "± 17758.15321336433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1578844.0412760417,
            "unit": "ns",
            "range": "± 2142.607097175864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1098063.7271634615,
            "unit": "ns",
            "range": "± 871.8264684737024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623886.558035714,
            "unit": "ns",
            "range": "± 2099.1266549601105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827144.6531808035,
            "unit": "ns",
            "range": "± 646.9427637007382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753633.2737165178,
            "unit": "ns",
            "range": "± 262.9328323307992"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "b2972226e0a15e35af4e322c6559b466a2f07bcc",
          "message": "Clarification",
          "timestamp": "2023-09-04T17:48:38+09:00",
          "tree_id": "04a2ccfa25c036d7bc61acb545d646427c7b59a1",
          "url": "https://github.com/greymistcube/libplanet/commit/b2972226e0a15e35af4e322c6559b466a2f07bcc"
        },
        "date": 1693818175958,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427977.4556962026,
            "unit": "ns",
            "range": "± 73659.30786446291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2711436.361111111,
            "unit": "ns",
            "range": "± 81157.27454768753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1835421.7727272727,
            "unit": "ns",
            "range": "± 100706.83237761956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4623816.3513513515,
            "unit": "ns",
            "range": "± 154904.84685430749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285018.3333333333,
            "unit": "ns",
            "range": "± 5220.317978543208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281120.87272727274,
            "unit": "ns",
            "range": "± 11612.204349470949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241936.46153846153,
            "unit": "ns",
            "range": "± 8487.85607065255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4512950.2,
            "unit": "ns",
            "range": "± 46653.75420539211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4239802,
            "unit": "ns",
            "range": "± 49288.25535851025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21804.73404255319,
            "unit": "ns",
            "range": "± 1707.9152806639493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90156.36363636363,
            "unit": "ns",
            "range": "± 4895.603869346358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77394.38461538461,
            "unit": "ns",
            "range": "± 3614.402728547915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89823.5,
            "unit": "ns",
            "range": "± 16244.952372745927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6408.422680412371,
            "unit": "ns",
            "range": "± 714.7197561960263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20785.315789473683,
            "unit": "ns",
            "range": "± 1805.8202960896513"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52725.83529411765,
            "unit": "ns",
            "range": "± 2848.995620210321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8269881.823529412,
            "unit": "ns",
            "range": "± 166137.2620727494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22565951.466666665,
            "unit": "ns",
            "range": "± 230518.9627470611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57119401.53333333,
            "unit": "ns",
            "range": "± 490000.2979035343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115022914.73333333,
            "unit": "ns",
            "range": "± 573908.1519649123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232574678.5,
            "unit": "ns",
            "range": "± 1360618.4592236413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683358.923076923,
            "unit": "ns",
            "range": "± 97856.09389666974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3803501.0555555555,
            "unit": "ns",
            "range": "± 77111.16852538077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4682329.368421053,
            "unit": "ns",
            "range": "± 102985.0422408843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4173160,
            "unit": "ns",
            "range": "± 79416.50008321108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6264841.117647059,
            "unit": "ns",
            "range": "± 104044.37640670588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5127939.700721154,
            "unit": "ns",
            "range": "± 15403.146179264202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1635503.1234654018,
            "unit": "ns",
            "range": "± 1048.335258307475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1088818.11015625,
            "unit": "ns",
            "range": "± 788.038325653615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658035.0583147323,
            "unit": "ns",
            "range": "± 4547.4759752555865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859319.9844401042,
            "unit": "ns",
            "range": "± 1830.4920210376374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751596.4442608173,
            "unit": "ns",
            "range": "± 343.93211267232334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "757e60620490bd326a2923e0d7f483672c7d433c",
          "message": "Clarification",
          "timestamp": "2023-09-04T17:47:45+09:00",
          "tree_id": "2debabf094a5893355adb8fc422c1f9c2fb509d3",
          "url": "https://github.com/greymistcube/libplanet/commit/757e60620490bd326a2923e0d7f483672c7d433c"
        },
        "date": 1693818449611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1747767.4842105263,
            "unit": "ns",
            "range": "± 137552.3069002946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3522674.4897959186,
            "unit": "ns",
            "range": "± 230044.42597016602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2286909.626262626,
            "unit": "ns",
            "range": "± 261398.98722722725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6133482.181818182,
            "unit": "ns",
            "range": "± 194354.5779979942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376916.27835051547,
            "unit": "ns",
            "range": "± 35739.639210412635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351685.0625,
            "unit": "ns",
            "range": "± 27658.637840954954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319146.90721649484,
            "unit": "ns",
            "range": "± 26740.791605897746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5378457.734693877,
            "unit": "ns",
            "range": "± 206119.92858990448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4859806.377049181,
            "unit": "ns",
            "range": "± 218446.1730401919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31529.01030927835,
            "unit": "ns",
            "range": "± 9678.852042699895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115705.78947368421,
            "unit": "ns",
            "range": "± 12803.519988821172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129426.42268041238,
            "unit": "ns",
            "range": "± 17309.194010960287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123328.75,
            "unit": "ns",
            "range": "± 21574.7538401521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8600.035714285714,
            "unit": "ns",
            "range": "± 1197.2921400346033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29707.20202020202,
            "unit": "ns",
            "range": "± 10126.073275420218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66953.03225806452,
            "unit": "ns",
            "range": "± 10845.230306504423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10306921.342857143,
            "unit": "ns",
            "range": "± 500078.72357378405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28140757.10526316,
            "unit": "ns",
            "range": "± 615760.4638218497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71392257.9090909,
            "unit": "ns",
            "range": "± 1717807.6860675507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146823323.57894737,
            "unit": "ns",
            "range": "± 2791091.477259535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293644173.8666667,
            "unit": "ns",
            "range": "± 3420992.02046075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4175336.3235294116,
            "unit": "ns",
            "range": "± 192289.6100915167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4444753.329896907,
            "unit": "ns",
            "range": "± 288896.57498134614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5842767.577777778,
            "unit": "ns",
            "range": "± 221092.14993285335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5026522.651162791,
            "unit": "ns",
            "range": "± 185069.74096306862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8569819.358974358,
            "unit": "ns",
            "range": "± 295784.8033825024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6263954.48828125,
            "unit": "ns",
            "range": "± 65019.81732393407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2018021.8911458333,
            "unit": "ns",
            "range": "± 27389.77696895705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374723.7532552083,
            "unit": "ns",
            "range": "± 14759.747271127406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3528559.600746269,
            "unit": "ns",
            "range": "± 166120.450220455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1074456.1638327206,
            "unit": "ns",
            "range": "± 21225.68784224154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 986986.6101262019,
            "unit": "ns",
            "range": "± 8689.71342591956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "33817b862113768956f32f8aeca3b90515632000",
          "message": "Clarification",
          "timestamp": "2023-09-05T02:03:56+09:00",
          "tree_id": "48082e1a88dfdacb4f998a4a576928ae1b6e028b",
          "url": "https://github.com/greymistcube/libplanet/commit/33817b862113768956f32f8aeca3b90515632000"
        },
        "date": 1693847801723,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1252868.0210526315,
            "unit": "ns",
            "range": "± 75618.94647478897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2401761.4210526315,
            "unit": "ns",
            "range": "± 73835.42806906618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1558456.1038961038,
            "unit": "ns",
            "range": "± 78593.23774405994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4340083.655172414,
            "unit": "ns",
            "range": "± 190514.52935268614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260670.57894736843,
            "unit": "ns",
            "range": "± 5307.597513792945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249115.39285714287,
            "unit": "ns",
            "range": "± 6282.084469695671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217370.1052631579,
            "unit": "ns",
            "range": "± 4770.275311117761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4111011.2666666666,
            "unit": "ns",
            "range": "± 36547.58381981861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3778148.6,
            "unit": "ns",
            "range": "± 35754.94955107614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18036.552083333332,
            "unit": "ns",
            "range": "± 1433.7251727381304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78808.421875,
            "unit": "ns",
            "range": "± 3502.181405492041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66277.61538461539,
            "unit": "ns",
            "range": "± 793.0266429384681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69663.8163265306,
            "unit": "ns",
            "range": "± 11032.80961995838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4299.030612244898,
            "unit": "ns",
            "range": "± 595.0423437082499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15491.375,
            "unit": "ns",
            "range": "± 822.4851100956868"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46011.41463414634,
            "unit": "ns",
            "range": "± 2359.222910099061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7703936.357142857,
            "unit": "ns",
            "range": "± 15414.935926946571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19451245.666666668,
            "unit": "ns",
            "range": "± 117286.0451482776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49544951.13333333,
            "unit": "ns",
            "range": "± 475791.9718806989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100569623.2,
            "unit": "ns",
            "range": "± 1327710.4418378707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199758850.86666667,
            "unit": "ns",
            "range": "± 1548752.743915469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3162958.793103448,
            "unit": "ns",
            "range": "± 86111.09666147204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3299055.888888889,
            "unit": "ns",
            "range": "± 107719.7131039036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4079327.8,
            "unit": "ns",
            "range": "± 59770.36404822329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3616507.035714286,
            "unit": "ns",
            "range": "± 97264.42285108278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5686540.347826087,
            "unit": "ns",
            "range": "± 106087.94574768817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5131811.003605769,
            "unit": "ns",
            "range": "± 11833.677515425588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1578311.0541294643,
            "unit": "ns",
            "range": "± 2102.2296909955803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1069540.1174479167,
            "unit": "ns",
            "range": "± 1061.5893567558046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2754695.736197917,
            "unit": "ns",
            "range": "± 15756.627205598306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802577.4712890625,
            "unit": "ns",
            "range": "± 637.7043204243646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737813.269391741,
            "unit": "ns",
            "range": "± 404.1516564921663"
          }
        ]
      }
    ]
  }
}