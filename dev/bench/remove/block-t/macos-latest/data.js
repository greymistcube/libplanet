window.BENCHMARK_DATA = {
  "lastUpdate": 1682994032130,
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
          "id": "36031c4669e9a2e4d73962ccf813eedf68216b4e",
          "message": "Partially removed t from block",
          "timestamp": "2023-05-02T10:52:11+09:00",
          "tree_id": "8a5c838f0ab496c8378d56632536d2700559c89e",
          "url": "https://github.com/greymistcube/libplanet/commit/36031c4669e9a2e4d73962ccf813eedf68216b4e"
        },
        "date": 1682994017277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8887943.525252525,
            "unit": "ns",
            "range": "± 640921.0170560092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21790478.11827957,
            "unit": "ns",
            "range": "± 1317623.0372668516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53750651.696078435,
            "unit": "ns",
            "range": "± 2181981.9255170287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109410918.88505746,
            "unit": "ns",
            "range": "± 5971755.050184842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229668030.12328768,
            "unit": "ns",
            "range": "± 11374213.70680118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80063.48837209302,
            "unit": "ns",
            "range": "± 8085.369834015285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 400456.01020408166,
            "unit": "ns",
            "range": "± 64059.11110475092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330883.5,
            "unit": "ns",
            "range": "± 35465.466806852506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313141.76666666666,
            "unit": "ns",
            "range": "± 28348.53135081806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4404313.1,
            "unit": "ns",
            "range": "± 303279.5396052955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4255066.53125,
            "unit": "ns",
            "range": "± 401067.0346044792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26730.119047619046,
            "unit": "ns",
            "range": "± 4339.733850050181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128050.5632183908,
            "unit": "ns",
            "range": "± 17785.252777002836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122563.21348314607,
            "unit": "ns",
            "range": "± 15173.245516722032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133860.45876288658,
            "unit": "ns",
            "range": "± 21430.417633742356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7116.586956521739,
            "unit": "ns",
            "range": "± 1213.9590498748519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20335.924731182797,
            "unit": "ns",
            "range": "± 4819.041489207974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1725996,
            "unit": "ns",
            "range": "± 198312.67865733444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3463071.629032258,
            "unit": "ns",
            "range": "± 478705.4587786329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2846245.909090909,
            "unit": "ns",
            "range": "± 371447.2169501538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7875861.086206896,
            "unit": "ns",
            "range": "± 1297845.663886948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361659.1666666665,
            "unit": "ns",
            "range": "± 183869.25610364697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3794817.1391752576,
            "unit": "ns",
            "range": "± 313240.62888457475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4852065.196969697,
            "unit": "ns",
            "range": "± 438020.32423026307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4493825.510416667,
            "unit": "ns",
            "range": "± 303969.240155506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8158883.6875,
            "unit": "ns",
            "range": "± 728229.6663580841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7838796.459603659,
            "unit": "ns",
            "range": "± 415298.53480005753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2400475.1126833544,
            "unit": "ns",
            "range": "± 183511.74604301158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1536836.6565234375,
            "unit": "ns",
            "range": "± 105005.86013758041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3790301.613125,
            "unit": "ns",
            "range": "± 381983.8625346348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1065759.2031709559,
            "unit": "ns",
            "range": "± 56947.63559127292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 861411.9657377861,
            "unit": "ns",
            "range": "± 42185.40118002611"
          }
        ]
      }
    ]
  }
}