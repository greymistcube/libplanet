window.BENCHMARK_DATA = {
  "lastUpdate": 1697778421473,
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
          "id": "6880cdf68f5595977006ed5852809792278cd8f0",
          "message": "Bump bencodex to 0.15.0-candidate",
          "timestamp": "2023-10-20T13:49:05+09:00",
          "tree_id": "77d3950ad43afd4a67de5c8f20e49e88a5ca87e2",
          "url": "https://github.com/greymistcube/libplanet/commit/6880cdf68f5595977006ed5852809792278cd8f0"
        },
        "date": 1697778395914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1611850,
            "unit": "ns",
            "range": "± 136876.02129732427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3083452.0408163266,
            "unit": "ns",
            "range": "± 189786.50252898352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2039525.7731958763,
            "unit": "ns",
            "range": "± 167410.7077160529"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5112122.857142857,
            "unit": "ns",
            "range": "± 148467.43965818046"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56968.131868131866,
            "unit": "ns",
            "range": "± 3979.3600580126536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9183893.333333334,
            "unit": "ns",
            "range": "± 167018.46547470073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24745450,
            "unit": "ns",
            "range": "± 193063.58358761578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61311706.666666664,
            "unit": "ns",
            "range": "± 609230.1388598877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124447808.33333333,
            "unit": "ns",
            "range": "± 572642.876904705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251224642.85714287,
            "unit": "ns",
            "range": "± 2973172.6531962934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5597634.795673077,
            "unit": "ns",
            "range": "± 28303.589107990887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1805045.46875,
            "unit": "ns",
            "range": "± 16204.178732739872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1333738.3231026786,
            "unit": "ns",
            "range": "± 6318.114333604821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3153802.109375,
            "unit": "ns",
            "range": "± 29836.136475379702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000425.9895833334,
            "unit": "ns",
            "range": "± 13006.22053793735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 950178.7955729166,
            "unit": "ns",
            "range": "± 11836.5646599229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4025361.111111111,
            "unit": "ns",
            "range": "± 84458.71347022611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4228067.021276596,
            "unit": "ns",
            "range": "± 159796.07972438543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5120046.666666667,
            "unit": "ns",
            "range": "± 88334.12111059323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4698614.285714285,
            "unit": "ns",
            "range": "± 79366.67201271342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7107860.869565218,
            "unit": "ns",
            "range": "± 167679.13281332198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309675,
            "unit": "ns",
            "range": "± 9275.635792485533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305665,
            "unit": "ns",
            "range": "± 13514.923640810892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283912.9032258064,
            "unit": "ns",
            "range": "± 12828.22814478849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4996003.333333333,
            "unit": "ns",
            "range": "± 75440.4104164971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4569773.333333333,
            "unit": "ns",
            "range": "± 77106.22048898025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26410.309278350516,
            "unit": "ns",
            "range": "± 4123.04207412648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107029.59183673469,
            "unit": "ns",
            "range": "± 10363.21019785284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95602.0202020202,
            "unit": "ns",
            "range": "± 11790.69141485791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106633.67346938775,
            "unit": "ns",
            "range": "± 19001.84984959916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7920.20202020202,
            "unit": "ns",
            "range": "± 1643.0422130527954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27187.628865979383,
            "unit": "ns",
            "range": "± 3531.03082599941"
          }
        ]
      }
    ]
  }
}