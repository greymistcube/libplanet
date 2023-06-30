window.BENCHMARK_DATA = {
  "lastUpdate": 1688104180273,
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
          "id": "562375f5749f1239d08719639d67a1a5f05299b5",
          "message": "Reroute delta access",
          "timestamp": "2023-06-30T14:30:25+09:00",
          "tree_id": "389a47a66d56321adead8d670cdb6acdeb0ffd82",
          "url": "https://github.com/greymistcube/libplanet/commit/562375f5749f1239d08719639d67a1a5f05299b5"
        },
        "date": 1688104171206,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9447744.587628866,
            "unit": "ns",
            "range": "± 834258.1547286832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24900204.20652174,
            "unit": "ns",
            "range": "± 1887716.0908465148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66644566.35135135,
            "unit": "ns",
            "range": "± 2259023.4949515644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137870706.27586207,
            "unit": "ns",
            "range": "± 7504107.512324703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275242323.5555556,
            "unit": "ns",
            "range": "± 9161319.937564503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64220.61111111111,
            "unit": "ns",
            "range": "± 14194.778048135526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357820.3541666667,
            "unit": "ns",
            "range": "± 39673.691052457885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347073.6597938144,
            "unit": "ns",
            "range": "± 54820.83003690419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298937.13402061857,
            "unit": "ns",
            "range": "± 49074.31970377278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5108641.698924731,
            "unit": "ns",
            "range": "± 460146.3471974405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4905916.642857143,
            "unit": "ns",
            "range": "± 375562.84772537136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21410.010869565216,
            "unit": "ns",
            "range": "± 6645.338944041849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107880.18681318681,
            "unit": "ns",
            "range": "± 19102.339935150518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108727.8762886598,
            "unit": "ns",
            "range": "± 29569.4433978649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134134.3404255319,
            "unit": "ns",
            "range": "± 29109.22503652322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6651.163043478261,
            "unit": "ns",
            "range": "± 1330.6165742354917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23662.061855670105,
            "unit": "ns",
            "range": "± 9337.367919430008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713885.2659574468,
            "unit": "ns",
            "range": "± 197597.48240425132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3343480.3368421053,
            "unit": "ns",
            "range": "± 304792.054960239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2270742.610526316,
            "unit": "ns",
            "range": "± 227531.806974429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6659436.021276596,
            "unit": "ns",
            "range": "± 691120.2889862597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7815613.353860294,
            "unit": "ns",
            "range": "± 117779.35508388522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2352709.00390625,
            "unit": "ns",
            "range": "± 39898.73088503787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1683976.7408854167,
            "unit": "ns",
            "range": "± 31304.108898195445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3198349.7921316964,
            "unit": "ns",
            "range": "± 46232.73002909839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1084314.0255629595,
            "unit": "ns",
            "range": "± 34981.68789753615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 981251.586077009,
            "unit": "ns",
            "range": "± 11344.154066642393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3832562.7741935486,
            "unit": "ns",
            "range": "± 361996.4341766825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4061921.442105263,
            "unit": "ns",
            "range": "± 403986.9202800717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5548025.59139785,
            "unit": "ns",
            "range": "± 500819.603302931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4639521.225806451,
            "unit": "ns",
            "range": "± 424774.95125465456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8453481.537634408,
            "unit": "ns",
            "range": "± 661713.6483632044"
          }
        ]
      }
    ]
  }
}