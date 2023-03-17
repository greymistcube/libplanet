window.BENCHMARK_DATA = {
  "lastUpdate": 1679042812503,
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
      }
    ]
  }
}