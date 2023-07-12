window.BENCHMARK_DATA = {
  "lastUpdate": 1689127286654,
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
          "id": "ecdebfb7e8cfbf78e974a5a9ae926cb8fe5ec597",
          "message": "Removed ActionsLogsList from TxExecution",
          "timestamp": "2023-07-12T10:24:37+09:00",
          "tree_id": "56adda268a6b85b4d29c5baba373e3dd0e7fa0fc",
          "url": "https://github.com/greymistcube/libplanet/commit/ecdebfb7e8cfbf78e974a5a9ae926cb8fe5ec597"
        },
        "date": 1689127277837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338533.78,
            "unit": "ns",
            "range": "± 13066.345964690345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329914.5,
            "unit": "ns",
            "range": "± 5506.192719398577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288237.14545454545,
            "unit": "ns",
            "range": "± 12010.634734234154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5346160.714285715,
            "unit": "ns",
            "range": "± 87194.28766348664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4987979.066666666,
            "unit": "ns",
            "range": "± 74586.6068937568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22455.936170212764,
            "unit": "ns",
            "range": "± 1875.9128920815185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104365.87692307692,
            "unit": "ns",
            "range": "± 4249.987693025168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91926.37837837837,
            "unit": "ns",
            "range": "± 4569.727262335121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109423.1914893617,
            "unit": "ns",
            "range": "± 13692.916670752978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5875.978723404255,
            "unit": "ns",
            "range": "± 705.1027680564965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21200.894736842107,
            "unit": "ns",
            "range": "± 1763.2137575345873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1757704.1224489796,
            "unit": "ns",
            "range": "± 109825.12463783873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3282460.210526316,
            "unit": "ns",
            "range": "± 110633.67771166487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2233574.315068493,
            "unit": "ns",
            "range": "± 105833.5544090705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6286856.885714286,
            "unit": "ns",
            "range": "± 303632.6686127257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7275486.899553572,
            "unit": "ns",
            "range": "± 28867.57847608395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2233827.4578125,
            "unit": "ns",
            "range": "± 9271.731780705035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1663350.073828125,
            "unit": "ns",
            "range": "± 4995.624832567804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3144863.404427083,
            "unit": "ns",
            "range": "± 6612.560992204722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005511.6990885417,
            "unit": "ns",
            "range": "± 1016.8425060955751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926660.5076171875,
            "unit": "ns",
            "range": "± 771.6093746661334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4140252.12,
            "unit": "ns",
            "range": "± 108367.58504096138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4456891.03030303,
            "unit": "ns",
            "range": "± 140635.31335591996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5204131.8125,
            "unit": "ns",
            "range": "± 86790.40642391973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4901854.379310345,
            "unit": "ns",
            "range": "± 135060.62847831758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7857223.147058823,
            "unit": "ns",
            "range": "± 250199.0190174229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10135939.6,
            "unit": "ns",
            "range": "± 184661.90723504865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26376047,
            "unit": "ns",
            "range": "± 464870.0072166104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66809237.5,
            "unit": "ns",
            "range": "± 484194.56569468975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137843319.93333334,
            "unit": "ns",
            "range": "± 1448911.0736447892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263006248.13333333,
            "unit": "ns",
            "range": "± 3278679.6717199804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53642.44871794872,
            "unit": "ns",
            "range": "± 2727.439690180108"
          }
        ]
      }
    ]
  }
}