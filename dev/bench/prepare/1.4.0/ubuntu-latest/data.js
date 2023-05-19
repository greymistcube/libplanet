window.BENCHMARK_DATA = {
  "lastUpdate": 1684481415362,
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
          "id": "590839db14d220a02292eb1e2ec496c6c0498312",
          "message": "Prepare 1.4.0",
          "timestamp": "2023-05-19T16:17:33+09:00",
          "tree_id": "a78e8827bdaff2136046290e89b28ef3453a6253",
          "url": "https://github.com/greymistcube/libplanet/commit/590839db14d220a02292eb1e2ec496c6c0498312"
        },
        "date": 1684481408280,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3348160.340909091,
            "unit": "ns",
            "range": "± 125496.14988626713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3491230.3921568627,
            "unit": "ns",
            "range": "± 142516.92776973246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4459373.277777778,
            "unit": "ns",
            "range": "± 94532.84244536738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4319797.125,
            "unit": "ns",
            "range": "± 144955.60606510506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6840847.317073171,
            "unit": "ns",
            "range": "± 218560.91735880397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281550.51515151514,
            "unit": "ns",
            "range": "± 8922.209171924618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263281.06976744183,
            "unit": "ns",
            "range": "± 8272.082087748233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236354.21739130435,
            "unit": "ns",
            "range": "± 5845.76883470213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271377.8,
            "unit": "ns",
            "range": "± 78420.47921684744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3946701.214285714,
            "unit": "ns",
            "range": "± 44919.675041941555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18315.279569892475,
            "unit": "ns",
            "range": "± 1393.0671069511975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87763.42666666667,
            "unit": "ns",
            "range": "± 4400.001437878553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70943.42857142857,
            "unit": "ns",
            "range": "± 874.1414877806343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89551.75510204081,
            "unit": "ns",
            "range": "± 13086.682208962504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4814.306122448979,
            "unit": "ns",
            "range": "± 539.978472426243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17397.55128205128,
            "unit": "ns",
            "range": "± 869.8614704971579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5840790.326041667,
            "unit": "ns",
            "range": "± 25675.572342166513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843959.4640066964,
            "unit": "ns",
            "range": "± 5677.702098093821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357797.0819010416,
            "unit": "ns",
            "range": "± 3663.3675215554463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647723.4302083333,
            "unit": "ns",
            "range": "± 5387.5384866332715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827373.2664713542,
            "unit": "ns",
            "range": "± 2339.2789224544717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744094.1307291667,
            "unit": "ns",
            "range": "± 1071.1800712628628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7785305.6,
            "unit": "ns",
            "range": "± 111210.52682753166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20763482.866666667,
            "unit": "ns",
            "range": "± 210011.93095865042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53034495.2,
            "unit": "ns",
            "range": "± 824557.1527196713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102770895.28571428,
            "unit": "ns",
            "range": "± 1151893.906765017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210757917,
            "unit": "ns",
            "range": "± 2897688.2324019955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405834.0515463918,
            "unit": "ns",
            "range": "± 101125.1886558161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2598083.9444444445,
            "unit": "ns",
            "range": "± 86105.58274814024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2208326.6049382715,
            "unit": "ns",
            "range": "± 115013.29676396976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5242706.785714285,
            "unit": "ns",
            "range": "± 144981.13794875296"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47127.8875,
            "unit": "ns",
            "range": "± 2486.956896980064"
          }
        ]
      }
    ]
  }
}