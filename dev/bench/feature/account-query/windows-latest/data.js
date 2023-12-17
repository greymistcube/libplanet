window.BENCHMARK_DATA = {
  "lastUpdate": 1702821251377,
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
          "id": "9191997b8ad9ba2908b17b5e53132722c0540cdd",
          "message": "Added account state queries",
          "timestamp": "2023-12-17T22:33:47+09:00",
          "tree_id": "ddd3bedabc865246b56b66d0c27114b6723994e3",
          "url": "https://github.com/greymistcube/libplanet/commit/9191997b8ad9ba2908b17b5e53132722c0540cdd"
        },
        "date": 1702821229978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027678.125,
            "unit": "ns",
            "range": "± 105898.7477716581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1800864.705882353,
            "unit": "ns",
            "range": "± 72307.64226146338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1492960.606060606,
            "unit": "ns",
            "range": "± 156348.56454845896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5307300,
            "unit": "ns",
            "range": "± 151987.45013980594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35086.153846153844,
            "unit": "ns",
            "range": "± 1647.9036799708708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4988900,
            "unit": "ns",
            "range": "± 49371.13762887413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13399042.857142856,
            "unit": "ns",
            "range": "± 158172.32916754344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33857400,
            "unit": "ns",
            "range": "± 367910.8880401089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66425413.333333336,
            "unit": "ns",
            "range": "± 314536.32283243915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138562053.33333334,
            "unit": "ns",
            "range": "± 1335533.8803354295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3333778.984375,
            "unit": "ns",
            "range": "± 6271.6474913581815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073799.9674479167,
            "unit": "ns",
            "range": "± 966.2113047928565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750531.5778459822,
            "unit": "ns",
            "range": "± 1812.256659651147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918420.8834134615,
            "unit": "ns",
            "range": "± 1656.5150315645221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626598.8131009615,
            "unit": "ns",
            "range": "± 1081.5707411594196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574898.0887276785,
            "unit": "ns",
            "range": "± 2971.3935099054397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2052712.9032258065,
            "unit": "ns",
            "range": "± 62187.59116273645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2215793.9393939395,
            "unit": "ns",
            "range": "± 66533.57206795088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2733984.090909091,
            "unit": "ns",
            "range": "± 100909.71774989579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2606962.5,
            "unit": "ns",
            "range": "± 102272.84247790632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6334374.025974026,
            "unit": "ns",
            "range": "± 321183.98949192144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172462,
            "unit": "ns",
            "range": "± 6692.057125535359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171152.23880597015,
            "unit": "ns",
            "range": "± 8109.148559889014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148055.88235294117,
            "unit": "ns",
            "range": "± 7083.85556442213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2974620,
            "unit": "ns",
            "range": "± 40703.98716868621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2652192.8571428573,
            "unit": "ns",
            "range": "± 38003.794634133665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13312.765957446809,
            "unit": "ns",
            "range": "± 2129.073403511096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61414.43298969072,
            "unit": "ns",
            "range": "± 5624.703504976981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52525.510204081635,
            "unit": "ns",
            "range": "± 6271.376823535754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72516.16161616161,
            "unit": "ns",
            "range": "± 17786.521536876648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2930.9278350515465,
            "unit": "ns",
            "range": "± 521.2886326095866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11325.28735632184,
            "unit": "ns",
            "range": "± 1045.8354166845597"
          }
        ]
      }
    ]
  }
}