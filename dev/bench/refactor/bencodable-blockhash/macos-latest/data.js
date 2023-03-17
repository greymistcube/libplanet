window.BENCHMARK_DATA = {
  "lastUpdate": 1679042963399,
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
          "id": "e91bd1b21264a90118c46bdd6e6a4984ebd773f0",
          "message": "Implemented IBencodable for BlockHash",
          "timestamp": "2023-03-17T17:27:41+09:00",
          "tree_id": "8289f76ee67db2138eb0bb233531e044803695cf",
          "url": "https://github.com/greymistcube/libplanet/commit/e91bd1b21264a90118c46bdd6e6a4984ebd773f0"
        },
        "date": 1679042796471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8612297.166666666,
            "unit": "ns",
            "range": "± 89099.06390214263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21628429.866666667,
            "unit": "ns",
            "range": "± 240158.1243463406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54741315.428571425,
            "unit": "ns",
            "range": "± 389332.8677171748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 106944979.73333333,
            "unit": "ns",
            "range": "± 1369387.6504031944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 222433635.05555555,
            "unit": "ns",
            "range": "± 4511806.884299936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80398.77894736842,
            "unit": "ns",
            "range": "± 6454.63739967275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236709.4014084507,
            "unit": "ns",
            "range": "± 11591.69562372123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237577.25,
            "unit": "ns",
            "range": "± 8400.171343643182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215802.88636363635,
            "unit": "ns",
            "range": "± 8115.369381370684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12848502.357142856,
            "unit": "ns",
            "range": "± 193536.22769070198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10437827.42857143,
            "unit": "ns",
            "range": "± 158405.31105872017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25544.436170212764,
            "unit": "ns",
            "range": "± 2116.4639195515874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64996.97777777778,
            "unit": "ns",
            "range": "± 3821.642678684857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63152.44915254237,
            "unit": "ns",
            "range": "± 2794.42514243633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131200.99484536084,
            "unit": "ns",
            "range": "± 16010.039172164568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9998.71052631579,
            "unit": "ns",
            "range": "± 1205.2015007187913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25401.1875,
            "unit": "ns",
            "range": "± 2568.9573199728534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1601576.762886598,
            "unit": "ns",
            "range": "± 167612.9620188883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2910609.9307692307,
            "unit": "ns",
            "range": "± 134963.750933812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2562222.19,
            "unit": "ns",
            "range": "± 217825.00320311778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6409675.571428572,
            "unit": "ns",
            "range": "± 254033.2126545333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530476.794117647,
            "unit": "ns",
            "range": "± 113474.28685797512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5355573.1,
            "unit": "ns",
            "range": "± 142621.14506606365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25299822.423076924,
            "unit": "ns",
            "range": "± 334221.6202739986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6854558.25,
            "unit": "ns",
            "range": "± 172979.93470348444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29922172.230769232,
            "unit": "ns",
            "range": "± 816006.3520804017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7053890.605769231,
            "unit": "ns",
            "range": "± 35061.984548440545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2078525.8483072917,
            "unit": "ns",
            "range": "± 10840.856935321448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297559.152719351,
            "unit": "ns",
            "range": "± 3169.4054795863367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2867170.9741210938,
            "unit": "ns",
            "range": "± 53727.74428420378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849128.5854867789,
            "unit": "ns",
            "range": "± 1194.5864284425577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718193.0246930803,
            "unit": "ns",
            "range": "± 1519.8805381039358"
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
          "id": "c88d92e42eaf0f92f832242ec182e0edb1526d4c",
          "message": "Changelog",
          "timestamp": "2023-03-17T17:30:21+09:00",
          "tree_id": "6c36baaf4c24339c0dc0ba1ef9b36b853d3e936d",
          "url": "https://github.com/greymistcube/libplanet/commit/c88d92e42eaf0f92f832242ec182e0edb1526d4c"
        },
        "date": 1679042947313,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8647487,
            "unit": "ns",
            "range": "± 314484.5191117978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22005350.5,
            "unit": "ns",
            "range": "± 377519.0939048392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54032140.73809524,
            "unit": "ns",
            "range": "± 1245625.3695394897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 109142300.42857143,
            "unit": "ns",
            "range": "± 3129077.5551140253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 220334687.5,
            "unit": "ns",
            "range": "± 3543453.568427141"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73039.25280898876,
            "unit": "ns",
            "range": "± 8054.1067761068025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235569.2125,
            "unit": "ns",
            "range": "± 11631.701149780993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233205.828125,
            "unit": "ns",
            "range": "± 10803.155172646359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220356.7906976744,
            "unit": "ns",
            "range": "± 7603.378771366305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12933844.083333334,
            "unit": "ns",
            "range": "± 331366.0488436521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10186354.5,
            "unit": "ns",
            "range": "± 170365.2524327116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25371.6875,
            "unit": "ns",
            "range": "± 3244.3210929171864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66559.37096774194,
            "unit": "ns",
            "range": "± 6512.1204758408285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62183.84210526316,
            "unit": "ns",
            "range": "± 3569.703531750398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131756.52105263158,
            "unit": "ns",
            "range": "± 18175.061652843393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9479.244897959185,
            "unit": "ns",
            "range": "± 1169.4784925603933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25955.40625,
            "unit": "ns",
            "range": "± 3311.431088559192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1604524.206185567,
            "unit": "ns",
            "range": "± 186782.0013365591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905899.6029411764,
            "unit": "ns",
            "range": "± 138418.59554697917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2507782.065217391,
            "unit": "ns",
            "range": "± 183234.2683331917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6221071.96875,
            "unit": "ns",
            "range": "± 284641.44257577474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3387149.90625,
            "unit": "ns",
            "range": "± 145463.96031982484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5433552.989583333,
            "unit": "ns",
            "range": "± 389550.26477498777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25998623.695652176,
            "unit": "ns",
            "range": "± 997195.0589299215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6713323.0375,
            "unit": "ns",
            "range": "± 349812.07532403007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33350047.467741936,
            "unit": "ns",
            "range": "± 2107264.8128962177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7020328.397536058,
            "unit": "ns",
            "range": "± 35492.51578958355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2008762.8430175781,
            "unit": "ns",
            "range": "± 20935.232529324072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1309559.9294270833,
            "unit": "ns",
            "range": "± 14458.846654691835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2822076.173023897,
            "unit": "ns",
            "range": "± 57740.265731935186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814699.413671875,
            "unit": "ns",
            "range": "± 10633.911439551894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730381.0149274553,
            "unit": "ns",
            "range": "± 6581.634328743013"
          }
        ]
      }
    ]
  }
}