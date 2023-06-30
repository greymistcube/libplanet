window.BENCHMARK_DATA = {
  "lastUpdate": 1688117622058,
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
          "id": "a6356333b6ce3987cecdc61838d8428a69efb910",
          "message": "General name changes",
          "timestamp": "2023-06-30T18:14:22+09:00",
          "tree_id": "9dd1f5bc211451c44be06e9a7b92b29245266c77",
          "url": "https://github.com/greymistcube/libplanet/commit/a6356333b6ce3987cecdc61838d8428a69efb910"
        },
        "date": 1688117608030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8324306.72972973,
            "unit": "ns",
            "range": "± 275732.3426377118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20059763.4,
            "unit": "ns",
            "range": "± 297746.34210342774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50101911.06666667,
            "unit": "ns",
            "range": "± 911381.4739982428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99271703.5,
            "unit": "ns",
            "range": "± 1101189.0818674846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217715538.94615385,
            "unit": "ns",
            "range": "± 9642025.811672922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74153.88043478261,
            "unit": "ns",
            "range": "± 6424.033538022274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337146.43956043955,
            "unit": "ns",
            "range": "± 21139.57918440026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326043.0729166667,
            "unit": "ns",
            "range": "± 23865.249446244412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321703.78723404254,
            "unit": "ns",
            "range": "± 26105.831760879828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4303937.411764706,
            "unit": "ns",
            "range": "± 201983.1505885914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3881190.277777778,
            "unit": "ns",
            "range": "± 124789.14968952596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18990.072916666668,
            "unit": "ns",
            "range": "± 3135.5320382748832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108852.79120879121,
            "unit": "ns",
            "range": "± 18437.293473655503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118267.97802197802,
            "unit": "ns",
            "range": "± 12308.353483150304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123611.85567010309,
            "unit": "ns",
            "range": "± 20675.11842317439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6479.586021505376,
            "unit": "ns",
            "range": "± 807.0364554008424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19632.729166666668,
            "unit": "ns",
            "range": "± 3596.7158454965006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560355.074468085,
            "unit": "ns",
            "range": "± 112053.66871141679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3017791.745283019,
            "unit": "ns",
            "range": "± 125363.93838707943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2123188.102040816,
            "unit": "ns",
            "range": "± 203362.85764667415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6418259.989583333,
            "unit": "ns",
            "range": "± 502894.76594641025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3356203.0692307693,
            "unit": "ns",
            "range": "± 145337.49757127473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3494776.3731343285,
            "unit": "ns",
            "range": "± 161790.48667492837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4548468.556179775,
            "unit": "ns",
            "range": "± 287394.0338297183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4187897.255319149,
            "unit": "ns",
            "range": "± 313932.9026851801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7288621.089285715,
            "unit": "ns",
            "range": "± 310857.66582641396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7086006.603170956,
            "unit": "ns",
            "range": "± 125712.9075773263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995144.5634014423,
            "unit": "ns",
            "range": "± 12512.956269437933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373996.080882353,
            "unit": "ns",
            "range": "± 26939.53127503146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2913643.654166667,
            "unit": "ns",
            "range": "± 155236.2297399264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850414.9051036006,
            "unit": "ns",
            "range": "± 20428.07161116705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 852866.9036287006,
            "unit": "ns",
            "range": "± 18787.956897272426"
          }
        ]
      }
    ]
  }
}