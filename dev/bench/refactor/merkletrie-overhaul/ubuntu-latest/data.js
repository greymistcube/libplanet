window.BENCHMARK_DATA = {
  "lastUpdate": 1692721108765,
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
          "id": "72d80bf51c0bcd6f41f280d72148bd74355e6f3e",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T01:00:48+09:00",
          "tree_id": "14da1eae20fc142705db54b95adc7312a8ddc449",
          "url": "https://github.com/greymistcube/libplanet/commit/72d80bf51c0bcd6f41f280d72148bd74355e6f3e"
        },
        "date": 1692721099248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1733302.7926829269,
            "unit": "ns",
            "range": "± 91469.63849476993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3378525.29,
            "unit": "ns",
            "range": "± 207417.11161194078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2176692.3673469387,
            "unit": "ns",
            "range": "± 132804.34281592933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5680958.054054054,
            "unit": "ns",
            "range": "± 189181.54322486493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334697.6666666667,
            "unit": "ns",
            "range": "± 10265.942740643291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330651.46153846156,
            "unit": "ns",
            "range": "± 12972.386236354449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305630.46153846156,
            "unit": "ns",
            "range": "± 14219.194929386962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5401055.928571428,
            "unit": "ns",
            "range": "± 35323.926717244714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5010295.266666667,
            "unit": "ns",
            "range": "± 69892.0975846408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24956.695652173912,
            "unit": "ns",
            "range": "± 2120.082943324222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105987.70212765958,
            "unit": "ns",
            "range": "± 7254.290485495628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93122.13402061856,
            "unit": "ns",
            "range": "± 7927.886901402838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96724.28888888888,
            "unit": "ns",
            "range": "± 11892.451153250931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6706.806122448979,
            "unit": "ns",
            "range": "± 1108.085221872037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22912.840425531915,
            "unit": "ns",
            "range": "± 2495.4836120746513"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58953.74736842105,
            "unit": "ns",
            "range": "± 4311.01741451647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9998583.431818182,
            "unit": "ns",
            "range": "± 375423.3671050993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26781469.933333334,
            "unit": "ns",
            "range": "± 268257.4945225114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67581178.6,
            "unit": "ns",
            "range": "± 856935.9623293079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133485201.6,
            "unit": "ns",
            "range": "± 2469318.6888599396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266731393.20833334,
            "unit": "ns",
            "range": "± 6730868.655866279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4356960.8,
            "unit": "ns",
            "range": "± 58243.78582205757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4463816.655172414,
            "unit": "ns",
            "range": "± 195080.6334546615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5242346.685185186,
            "unit": "ns",
            "range": "± 220275.3058992592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4862108.127659574,
            "unit": "ns",
            "range": "± 179020.337855983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7657211,
            "unit": "ns",
            "range": "± 304553.44223358657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5814452.25625,
            "unit": "ns",
            "range": "± 96556.87834566915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1848539.8248046874,
            "unit": "ns",
            "range": "± 27027.044872529295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288670.0569010417,
            "unit": "ns",
            "range": "± 9507.12964862568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3072044.60390625,
            "unit": "ns",
            "range": "± 6882.668380387374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995836.0868489583,
            "unit": "ns",
            "range": "± 6413.575463118323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 919106.4206380208,
            "unit": "ns",
            "range": "± 2744.4513975295094"
          }
        ]
      }
    ]
  }
}