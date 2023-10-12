window.BENCHMARK_DATA = {
  "lastUpdate": 1697116355476,
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
          "id": "0e8cb7af9ee23d25f1d64e74dfeba9781e0e54e7",
          "message": "Optimized BlockMarshaler",
          "timestamp": "2023-10-12T21:52:00+09:00",
          "tree_id": "2bf417fb47ee9a4212fde2010631d21168985448",
          "url": "https://github.com/greymistcube/libplanet/commit/0e8cb7af9ee23d25f1d64e74dfeba9781e0e54e7"
        },
        "date": 1697116330082,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1612501.0204081633,
            "unit": "ns",
            "range": "± 135571.99365232317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3069782.6086956523,
            "unit": "ns",
            "range": "± 118052.91337992434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2327096.5517241377,
            "unit": "ns",
            "range": "± 121897.93714823227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10434951.136363637,
            "unit": "ns",
            "range": "± 825607.7642915333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60533.333333333336,
            "unit": "ns",
            "range": "± 6827.755532679467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9272260.714285715,
            "unit": "ns",
            "range": "± 265917.7000770835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24672225,
            "unit": "ns",
            "range": "± 477587.869053085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62533842.307692304,
            "unit": "ns",
            "range": "± 433161.73357753735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126700657.14285715,
            "unit": "ns",
            "range": "± 1518150.4352915173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256834150,
            "unit": "ns",
            "range": "± 4759845.5785876075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5461464.453125,
            "unit": "ns",
            "range": "± 39770.981512391474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1747814.8158482143,
            "unit": "ns",
            "range": "± 14653.142769514745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1283708.9146205357,
            "unit": "ns",
            "range": "± 14738.18611615286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3200351.1979166665,
            "unit": "ns",
            "range": "± 29109.52910134431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023510.1953125,
            "unit": "ns",
            "range": "± 17021.69786557524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923853.57421875,
            "unit": "ns",
            "range": "± 9919.223915952769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4099200,
            "unit": "ns",
            "range": "± 82579.6963544914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4173178.378378378,
            "unit": "ns",
            "range": "± 141223.54646118713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5039800,
            "unit": "ns",
            "range": "± 94007.81217537189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4940134.782608695,
            "unit": "ns",
            "range": "± 236714.9904707241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12022014.285714285,
            "unit": "ns",
            "range": "± 417225.668931492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298610.4166666667,
            "unit": "ns",
            "range": "± 11614.265615188153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292081.25,
            "unit": "ns",
            "range": "± 5718.300301080149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261081.81818181818,
            "unit": "ns",
            "range": "± 16620.201401296737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4931637.5,
            "unit": "ns",
            "range": "± 93247.66216908603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4581441.176470588,
            "unit": "ns",
            "range": "± 76058.34979493976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25175.2688172043,
            "unit": "ns",
            "range": "± 1956.4084170599833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99060.86956521739,
            "unit": "ns",
            "range": "± 7514.702899989295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79271.73913043478,
            "unit": "ns",
            "range": "± 4783.1509704299015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89555.78947368421,
            "unit": "ns",
            "range": "± 12242.19869514367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5666.326530612245,
            "unit": "ns",
            "range": "± 763.8675166546948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21005.102040816328,
            "unit": "ns",
            "range": "± 1854.244084121868"
          }
        ]
      }
    ]
  }
}