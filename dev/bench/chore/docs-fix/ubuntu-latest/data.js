window.BENCHMARK_DATA = {
  "lastUpdate": 1695628458773,
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
          "id": "ec42f31dd8115c2489dbc734b4c3c34f0b416a2f",
          "message": "Docs fix",
          "timestamp": "2023-09-25T16:39:17+09:00",
          "tree_id": "3be4ec43e39631347d4fc02318a7d2438c02fade",
          "url": "https://github.com/greymistcube/libplanet/commit/ec42f31dd8115c2489dbc734b4c3c34f0b416a2f"
        },
        "date": 1695628451090,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284077.4210526316,
            "unit": "ns",
            "range": "± 12018.383738119353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266442.69696969696,
            "unit": "ns",
            "range": "± 6986.100421036262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240120.88888888888,
            "unit": "ns",
            "range": "± 12552.186401181272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4400253.533333333,
            "unit": "ns",
            "range": "± 72467.1345003736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4082746.4,
            "unit": "ns",
            "range": "± 75303.94043930048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21888.905263157896,
            "unit": "ns",
            "range": "± 1976.141609587283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96801.1836734694,
            "unit": "ns",
            "range": "± 11560.700115554962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75180.7,
            "unit": "ns",
            "range": "± 4190.522461996164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93611.60416666667,
            "unit": "ns",
            "range": "± 13134.898941353198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6392.8,
            "unit": "ns",
            "range": "± 620.9643426909606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21199.59375,
            "unit": "ns",
            "range": "± 2029.2976362233262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3698471.9310344825,
            "unit": "ns",
            "range": "± 107542.14512058948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3706539.325,
            "unit": "ns",
            "range": "± 130729.55347300257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4499022.65,
            "unit": "ns",
            "range": "± 101560.76050910038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4343616.67816092,
            "unit": "ns",
            "range": "± 223147.30953671975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10993043.029411765,
            "unit": "ns",
            "range": "± 352473.6929631199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521103.693877551,
            "unit": "ns",
            "range": "± 103699.15300426628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2777558.6153846155,
            "unit": "ns",
            "range": "± 96091.47663215599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2293215.3804347827,
            "unit": "ns",
            "range": "± 127280.0270979798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9556106.935483871,
            "unit": "ns",
            "range": "± 254990.19783682344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54085.666666666664,
            "unit": "ns",
            "range": "± 4707.6104556608325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8113825.142857143,
            "unit": "ns",
            "range": "± 79019.0447111008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21975281.615384616,
            "unit": "ns",
            "range": "± 144983.47576507842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58373308.333333336,
            "unit": "ns",
            "range": "± 352781.4629620818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115021465.26666667,
            "unit": "ns",
            "range": "± 1795053.3913045782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226581625.24,
            "unit": "ns",
            "range": "± 6026932.275269638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5043645.45703125,
            "unit": "ns",
            "range": "± 36223.04079359531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1596713.6527994792,
            "unit": "ns",
            "range": "± 2386.5183098223533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1075297.7749720982,
            "unit": "ns",
            "range": "± 1475.749259523957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645375.6979166665,
            "unit": "ns",
            "range": "± 6216.649632163425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825719.4629603794,
            "unit": "ns",
            "range": "± 1750.1234728566985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762395.997265625,
            "unit": "ns",
            "range": "± 1962.5744546716617"
          }
        ]
      }
    ]
  }
}