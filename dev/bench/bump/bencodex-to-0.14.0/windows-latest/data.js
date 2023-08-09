window.BENCHMARK_DATA = {
  "lastUpdate": 1691588384662,
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
          "id": "5dd07bb61b320a7656160bf0ac95fd4b8281c09f",
          "message": "Changelog",
          "timestamp": "2023-08-09T22:24:23+09:00",
          "tree_id": "a47dc37aeca759d21eabdddeb9c8efb9b7507137",
          "url": "https://github.com/greymistcube/libplanet/commit/5dd07bb61b320a7656160bf0ac95fd4b8281c09f"
        },
        "date": 1691588362906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1223466.6666666667,
            "unit": "ns",
            "range": "± 115251.27118693349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2234452.777777778,
            "unit": "ns",
            "range": "± 108690.69821976128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528637.2340425532,
            "unit": "ns",
            "range": "± 109065.21575136075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4063985.2459016396,
            "unit": "ns",
            "range": "± 182677.25714682858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44634.32835820896,
            "unit": "ns",
            "range": "± 2132.1174735108507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6730324.137931035,
            "unit": "ns",
            "range": "± 193704.77841877314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18747513.333333332,
            "unit": "ns",
            "range": "± 240425.277571303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48094600,
            "unit": "ns",
            "range": "± 751731.8537883039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94362600,
            "unit": "ns",
            "range": "± 1462318.277354733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188246478.57142857,
            "unit": "ns",
            "range": "± 1894077.400001859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4076429.910714286,
            "unit": "ns",
            "range": "± 36289.869555110025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1271573.5877403845,
            "unit": "ns",
            "range": "± 4015.7926984303735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 954346.3416466346,
            "unit": "ns",
            "range": "± 2639.8585790313077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2400064.55078125,
            "unit": "ns",
            "range": "± 11465.446371228954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 745909.7205528846,
            "unit": "ns",
            "range": "± 3980.3231769161866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 681164.9338942308,
            "unit": "ns",
            "range": "± 2854.344334642355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2937192.3076923075,
            "unit": "ns",
            "range": "± 120798.91384746386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3042100,
            "unit": "ns",
            "range": "± 133281.35521941097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3701847.8260869565,
            "unit": "ns",
            "range": "± 133054.34936167242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3405302.4691358022,
            "unit": "ns",
            "range": "± 177212.0170694616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5476680,
            "unit": "ns",
            "range": "± 125411.4348853405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233240.35087719298,
            "unit": "ns",
            "range": "± 10066.277856024375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224473.5849056604,
            "unit": "ns",
            "range": "± 8558.557367278585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198859.7014925373,
            "unit": "ns",
            "range": "± 9343.642461855963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3720125,
            "unit": "ns",
            "range": "± 82396.30724351923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3325885.714285714,
            "unit": "ns",
            "range": "± 94712.0654611404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19113.636363636364,
            "unit": "ns",
            "range": "± 1233.2726128123745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83968.0412371134,
            "unit": "ns",
            "range": "± 6163.020539065925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68316.23376623377,
            "unit": "ns",
            "range": "± 3510.3834844347434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77111.70212765958,
            "unit": "ns",
            "range": "± 12233.295447332082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5776.8421052631575,
            "unit": "ns",
            "range": "± 724.5618825280156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18740.10989010989,
            "unit": "ns",
            "range": "± 1324.8945404618225"
          }
        ]
      }
    ]
  }
}