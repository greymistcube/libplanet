window.BENCHMARK_DATA = {
  "lastUpdate": 1678861388396,
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
          "id": "957935b3c131a2bd3b40a0af0c79827c262cca80",
          "message": "Changelog",
          "timestamp": "2023-03-15T15:05:02+09:00",
          "tree_id": "ca9f0634fd837ee89a922165df92d7cf9c503206",
          "url": "https://github.com/greymistcube/libplanet/commit/957935b3c131a2bd3b40a0af0c79827c262cca80"
        },
        "date": 1678861368548,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363734,
            "unit": "ns",
            "range": "± 81733.2996193514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2484357.1428571427,
            "unit": "ns",
            "range": "± 80599.48286841215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2251941.6666666665,
            "unit": "ns",
            "range": "± 58331.779068320575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5063082.857142857,
            "unit": "ns",
            "range": "± 163135.44983110396"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48373.28767123288,
            "unit": "ns",
            "range": "± 2275.504861438275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7078640,
            "unit": "ns",
            "range": "± 83506.86712566133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19673466.666666668,
            "unit": "ns",
            "range": "± 181645.8668739285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49969560,
            "unit": "ns",
            "range": "± 554704.6367212014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 96825540,
            "unit": "ns",
            "range": "± 1652779.5206862893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 196510386.66666666,
            "unit": "ns",
            "range": "± 2353308.326549992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4807303.292410715,
            "unit": "ns",
            "range": "± 24189.269837690998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509002.05078125,
            "unit": "ns",
            "range": "± 5483.246131884925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167402.8776041667,
            "unit": "ns",
            "range": "± 6074.248213885295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675325.78125,
            "unit": "ns",
            "range": "± 6788.099162142466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821442.3549107143,
            "unit": "ns",
            "range": "± 1268.8303564186808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760602.0856584822,
            "unit": "ns",
            "range": "± 1102.9446180573918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3067385.714285714,
            "unit": "ns",
            "range": "± 88523.48356711424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4929817.073170732,
            "unit": "ns",
            "range": "± 176340.52271448984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22685226.666666668,
            "unit": "ns",
            "range": "± 413572.2107731726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6018944.262295082,
            "unit": "ns",
            "range": "± 267808.0354312209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25740141.17647059,
            "unit": "ns",
            "range": "± 504139.1599286148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180986.07594936708,
            "unit": "ns",
            "range": "± 9381.032885250841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176818.75,
            "unit": "ns",
            "range": "± 3390.6181835568964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157650,
            "unit": "ns",
            "range": "± 6468.036038557488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10973123.333333334,
            "unit": "ns",
            "range": "± 320116.04650483397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8657213.333333334,
            "unit": "ns",
            "range": "± 127090.84976991103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19956.521739130436,
            "unit": "ns",
            "range": "± 1389.228922648178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55974.73684210526,
            "unit": "ns",
            "range": "± 5044.419044235024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41641.333333333336,
            "unit": "ns",
            "range": "± 2123.8728860353285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96755.55555555556,
            "unit": "ns",
            "range": "± 11378.395762906488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5544.210526315789,
            "unit": "ns",
            "range": "± 682.5664630523263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18925.263157894737,
            "unit": "ns",
            "range": "± 1763.577627163736"
          }
        ]
      }
    ]
  }
}