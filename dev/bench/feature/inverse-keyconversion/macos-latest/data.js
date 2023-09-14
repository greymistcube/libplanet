window.BENCHMARK_DATA = {
  "lastUpdate": 1694659779942,
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
          "id": "80f99a1dd9afb4cbcd9b3f0004b6ac833d5228d0",
          "message": "Initial implementation of AccountDiff",
          "timestamp": "2023-09-14T11:31:17+09:00",
          "tree_id": "c9d18aa7f1110322223d748a09b0a9fa834f95e2",
          "url": "https://github.com/greymistcube/libplanet/commit/80f99a1dd9afb4cbcd9b3f0004b6ac833d5228d0"
        },
        "date": 1694659765978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8261846.6,
            "unit": "ns",
            "range": "± 146313.01816057635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21972336.279069766,
            "unit": "ns",
            "range": "± 809026.5276905422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52619118.59090909,
            "unit": "ns",
            "range": "± 1252049.915392084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103633826.97619048,
            "unit": "ns",
            "range": "± 3766992.6122008217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205743447.46296296,
            "unit": "ns",
            "range": "± 5727077.234866326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63851.692307692305,
            "unit": "ns",
            "range": "± 9529.070097679823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336658.202020202,
            "unit": "ns",
            "range": "± 44052.517124445774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332894.4175824176,
            "unit": "ns",
            "range": "± 34542.913156782546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296214.04285714286,
            "unit": "ns",
            "range": "± 13887.156691576483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4110761.878787879,
            "unit": "ns",
            "range": "± 129045.23885414118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3695607.3086419753,
            "unit": "ns",
            "range": "± 192394.10647708533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22495.81052631579,
            "unit": "ns",
            "range": "± 3613.11607216705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107863.05434782608,
            "unit": "ns",
            "range": "± 15620.33100517718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101040.32967032967,
            "unit": "ns",
            "range": "± 13741.193609043612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112795.02061855671,
            "unit": "ns",
            "range": "± 15664.614407013147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8920.445652173914,
            "unit": "ns",
            "range": "± 1025.9885756934218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24801.554347826088,
            "unit": "ns",
            "range": "± 3122.2982531509124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1825486.6179775281,
            "unit": "ns",
            "range": "± 381872.3831114771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3237054.8333333335,
            "unit": "ns",
            "range": "± 389786.8181559438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2385790.295698925,
            "unit": "ns",
            "range": "± 416907.1034757169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6368555.144444444,
            "unit": "ns",
            "range": "± 847505.8667364016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335640.7045454546,
            "unit": "ns",
            "range": "± 124476.05734317492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3453849.619402985,
            "unit": "ns",
            "range": "± 163685.00724409882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4323943.760869565,
            "unit": "ns",
            "range": "± 160439.17630033643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3951841.6129032257,
            "unit": "ns",
            "range": "± 353568.1262843695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6753748.882978723,
            "unit": "ns",
            "range": "± 258470.78832782374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6197190.417447916,
            "unit": "ns",
            "range": "± 68618.53317619515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1738721.1730057567,
            "unit": "ns",
            "range": "± 38441.9429263385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1031868.4756266276,
            "unit": "ns",
            "range": "± 40407.03180023676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2923838.0693609775,
            "unit": "ns",
            "range": "± 98680.41140950847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826870.2127441406,
            "unit": "ns",
            "range": "± 17603.168905218452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732256.9810965402,
            "unit": "ns",
            "range": "± 9590.804109527384"
          }
        ]
      }
    ]
  }
}