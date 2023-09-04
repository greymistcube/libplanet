window.BENCHMARK_DATA = {
  "lastUpdate": 1693800473960,
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
      }
    ]
  }
}