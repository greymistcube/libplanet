window.BENCHMARK_DATA = {
  "lastUpdate": 1693554256742,
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
          "id": "081800f6ea9ad2fa55fb010ab82f519a554ae616",
          "message": "Cleanup",
          "timestamp": "2023-09-01T16:17:44+09:00",
          "tree_id": "830eaf91878beea538b2c3f121b1353419b4be6d",
          "url": "https://github.com/greymistcube/libplanet/commit/081800f6ea9ad2fa55fb010ab82f519a554ae616"
        },
        "date": 1693553552111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1287052,
            "unit": "ns",
            "range": "± 91735.58784227459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2359440.909090909,
            "unit": "ns",
            "range": "± 73822.0434658911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623825.5319148935,
            "unit": "ns",
            "range": "± 111507.12662134394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4258968.181818182,
            "unit": "ns",
            "range": "± 199708.62402632867"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43906.944444444445,
            "unit": "ns",
            "range": "± 2091.183800389376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7148178.571428572,
            "unit": "ns",
            "range": "± 25189.655342297487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18035433.333333332,
            "unit": "ns",
            "range": "± 104428.25744203985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47004292.85714286,
            "unit": "ns",
            "range": "± 241943.30061873115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93784973.33333333,
            "unit": "ns",
            "range": "± 405969.6425432161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185921553.33333334,
            "unit": "ns",
            "range": "± 1327897.8536805923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4288007.001201923,
            "unit": "ns",
            "range": "± 4015.8521946432807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1407759.1536458333,
            "unit": "ns",
            "range": "± 1930.015327831348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1021354.921875,
            "unit": "ns",
            "range": "± 1273.849008814879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2551677.6953125,
            "unit": "ns",
            "range": "± 3960.1711828490334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813014.2578125,
            "unit": "ns",
            "range": "± 854.1367633063089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720688.2747395834,
            "unit": "ns",
            "range": "± 845.1792891530813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2958636.8421052634,
            "unit": "ns",
            "range": "± 62146.92457328945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3084766.6666666665,
            "unit": "ns",
            "range": "± 77220.11827669437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3916540,
            "unit": "ns",
            "range": "± 87422.66296561778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3369715,
            "unit": "ns",
            "range": "± 117788.1530545411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5558182.608695652,
            "unit": "ns",
            "range": "± 121046.35720617691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244213.9534883721,
            "unit": "ns",
            "range": "± 8917.173943612534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240615,
            "unit": "ns",
            "range": "± 8186.528959837399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215368.94736842104,
            "unit": "ns",
            "range": "± 12372.870929998096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3788016.6666666665,
            "unit": "ns",
            "range": "± 54726.236417105756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3500793.3333333335,
            "unit": "ns",
            "range": "± 42263.34897599416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19526.262626262625,
            "unit": "ns",
            "range": "± 2151.676416125668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82492.70833333333,
            "unit": "ns",
            "range": "± 6392.944215743951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65420,
            "unit": "ns",
            "range": "± 1985.061860052551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77556.56565656565,
            "unit": "ns",
            "range": "± 13135.146508479325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4435.555555555556,
            "unit": "ns",
            "range": "± 455.5059197708819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18117.204301075268,
            "unit": "ns",
            "range": "± 1886.3136153973635"
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
          "id": "1a725f7ed14b46f64b8e468e465927d64dda99e5",
          "message": "Changelog",
          "timestamp": "2023-09-01T16:26:51+09:00",
          "tree_id": "b3341a60893bb0079597710f55dd152f66cbe3af",
          "url": "https://github.com/greymistcube/libplanet/commit/1a725f7ed14b46f64b8e468e465927d64dda99e5"
        },
        "date": 1693554230477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1358692,
            "unit": "ns",
            "range": "± 113174.17405365621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2593579.487179487,
            "unit": "ns",
            "range": "± 89649.51104891227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1779893,
            "unit": "ns",
            "range": "± 133446.3492656252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4541224,
            "unit": "ns",
            "range": "± 182457.41192767955"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52411.458333333336,
            "unit": "ns",
            "range": "± 4351.330583956727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7939826.666666667,
            "unit": "ns",
            "range": "± 119358.6759469521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21149953.846153848,
            "unit": "ns",
            "range": "± 189592.79441030373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53189392.307692304,
            "unit": "ns",
            "range": "± 334801.66133981093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107003420,
            "unit": "ns",
            "range": "± 907484.6572492877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213501438.46153846,
            "unit": "ns",
            "range": "± 526404.9447881696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4525550.677083333,
            "unit": "ns",
            "range": "± 14162.517450508112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1429445.3404017857,
            "unit": "ns",
            "range": "± 3448.8170827285317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1065863.1640625,
            "unit": "ns",
            "range": "± 4245.052688633669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694150.3385416665,
            "unit": "ns",
            "range": "± 9386.094540715452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832556.5011160715,
            "unit": "ns",
            "range": "± 2974.012813924497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771213.9908854166,
            "unit": "ns",
            "range": "± 2426.0418210110183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3443518.4210526315,
            "unit": "ns",
            "range": "± 116527.76459609902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3608966.6666666665,
            "unit": "ns",
            "range": "± 50674.93980074889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4355003.846153846,
            "unit": "ns",
            "range": "± 119029.43999118614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3978060,
            "unit": "ns",
            "range": "± 51470.51583188185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6238652.173913044,
            "unit": "ns",
            "range": "± 152945.80998024702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277544.7368421053,
            "unit": "ns",
            "range": "± 9557.838084409841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267289.79591836734,
            "unit": "ns",
            "range": "± 10578.42231655945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251001.5873015873,
            "unit": "ns",
            "range": "± 11542.578848424395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4272613.333333333,
            "unit": "ns",
            "range": "± 52442.320242157024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3895057.6923076925,
            "unit": "ns",
            "range": "± 37211.7468356983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24966.842105263157,
            "unit": "ns",
            "range": "± 2110.8963827326575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96690.72164948453,
            "unit": "ns",
            "range": "± 8095.228564745032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84182.47422680413,
            "unit": "ns",
            "range": "± 7664.759866716828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93152.17391304347,
            "unit": "ns",
            "range": "± 14120.692308315665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7160.416666666667,
            "unit": "ns",
            "range": "± 948.4035524214438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24953.535353535353,
            "unit": "ns",
            "range": "± 3110.1648073437227"
          }
        ]
      }
    ]
  }
}