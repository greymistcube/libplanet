window.BENCHMARK_DATA = {
  "lastUpdate": 1707289447192,
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
          "id": "1a91f6c432730d5ff7544165cd18c0253840f049",
          "message": "Prepare 4.0.5",
          "timestamp": "2024-02-07T15:51:40+09:00",
          "tree_id": "3d806d9db013e1f653f5897c9fb66ad9b584d62e",
          "url": "https://github.com/greymistcube/libplanet/commit/1a91f6c432730d5ff7544165cd18c0253840f049"
        },
        "date": 1707289426585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1052615.4639175257,
            "unit": "ns",
            "range": "± 112979.53662445376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1809112.962962963,
            "unit": "ns",
            "range": "± 72193.39865890186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1583082.2916666667,
            "unit": "ns",
            "range": "± 170643.16600487308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11185678.494623655,
            "unit": "ns",
            "range": "± 1036674.7512924555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36437.36263736264,
            "unit": "ns",
            "range": "± 2083.7811972815375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5472446.666666667,
            "unit": "ns",
            "range": "± 89713.13701114766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13784346.153846154,
            "unit": "ns",
            "range": "± 119215.30673103333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34311707.14285714,
            "unit": "ns",
            "range": "± 268487.8695563378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69342885.71428572,
            "unit": "ns",
            "range": "± 773809.5729343462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139120376.92307693,
            "unit": "ns",
            "range": "± 1608173.5494828941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3364696.1979166665,
            "unit": "ns",
            "range": "± 14908.535346992028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084598.73046875,
            "unit": "ns",
            "range": "± 1903.2290595138688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747224.951171875,
            "unit": "ns",
            "range": "± 1807.1731899843041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973114.032451923,
            "unit": "ns",
            "range": "± 7292.722478890322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611523.3072916666,
            "unit": "ns",
            "range": "± 1292.2246765422465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572996.240234375,
            "unit": "ns",
            "range": "± 3523.3959876771783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2274166.6666666665,
            "unit": "ns",
            "range": "± 33627.57513594772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2371536.8421052634,
            "unit": "ns",
            "range": "± 102165.65615211641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2948525.714285714,
            "unit": "ns",
            "range": "± 69649.87370816279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2950867.901234568,
            "unit": "ns",
            "range": "± 155418.41173680202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12469579.120879121,
            "unit": "ns",
            "range": "± 1612621.6860556593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184661.72839506174,
            "unit": "ns",
            "range": "± 9248.926530971507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177712.12121212122,
            "unit": "ns",
            "range": "± 7458.469943143426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149586.66666666666,
            "unit": "ns",
            "range": "± 7418.481911676664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2888307.1428571427,
            "unit": "ns",
            "range": "± 41139.489998815465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2691200,
            "unit": "ns",
            "range": "± 46789.48294527002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13349.45054945055,
            "unit": "ns",
            "range": "± 1569.456638201304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62776.28865979381,
            "unit": "ns",
            "range": "± 7743.502292189297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50598.92473118279,
            "unit": "ns",
            "range": "± 4640.687135769779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74444.89795918367,
            "unit": "ns",
            "range": "± 14885.889827916295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3868.686868686869,
            "unit": "ns",
            "range": "± 904.9350483678843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13182.291666666666,
            "unit": "ns",
            "range": "± 2038.0070136580246"
          }
        ]
      }
    ]
  }
}