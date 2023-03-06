window.BENCHMARK_DATA = {
  "lastUpdate": 1678121854835,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa15924beb36a7ebe3d92052f5c20af2a235916c",
          "message": "Merge pull request #2788 from dahlia/0.48-maintenance",
          "timestamp": "2023-02-06T19:09:15+09:00",
          "tree_id": "756adedd8cd6f72fe1983dfa077c437153ef7b89",
          "url": "https://github.com/greymistcube/libplanet/commit/fa15924beb36a7ebe3d92052f5c20af2a235916c"
        },
        "date": 1675700845594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 130304.83673469388,
            "unit": "ns",
            "range": "± 11575.708813276646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111310.05376344085,
            "unit": "ns",
            "range": "± 18792.74491622255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226105.0206185567,
            "unit": "ns",
            "range": "± 23355.20577318692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203496.72916666666,
            "unit": "ns",
            "range": "± 16593.301218757028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3692689.970588235,
            "unit": "ns",
            "range": "± 115889.34148038241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9473035.261904761,
            "unit": "ns",
            "range": "± 344707.1006500149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19967.844444444443,
            "unit": "ns",
            "range": "± 2547.8956547836524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56922.30612244898,
            "unit": "ns",
            "range": "± 9061.998350888645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43183.02127659575,
            "unit": "ns",
            "range": "± 4386.862228814145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101021.27173913043,
            "unit": "ns",
            "range": "± 16530.299143104192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5370,
            "unit": "ns",
            "range": "± 955.1224390428791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19990.52688172043,
            "unit": "ns",
            "range": "± 3311.033106184198"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4807399.718290441,
            "unit": "ns",
            "range": "± 94354.98910099601"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7438790.142857143,
            "unit": "ns",
            "range": "± 205559.85792152994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27533697.157894738,
            "unit": "ns",
            "range": "± 1380435.2199220655"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7363182.306818182,
            "unit": "ns",
            "range": "± 987652.9392998071"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30838847.06451613,
            "unit": "ns",
            "range": "± 925548.3443621205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6089425.830915178,
            "unit": "ns",
            "range": "± 74063.35704588775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904605.8229549632,
            "unit": "ns",
            "range": "± 56977.29932852596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1212795.7599051339,
            "unit": "ns",
            "range": "± 6742.71660117597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2393027.096454327,
            "unit": "ns",
            "range": "± 29248.725841508705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 750914.151968149,
            "unit": "ns",
            "range": "± 4064.4273025631755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 693693.9665527344,
            "unit": "ns",
            "range": "± 2737.8819526322595"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d3bae116896d64908c86e567a069fbb85daae677",
          "message": "Merge pull request #2888 from greymistcube/port/0.50.1-to-main\n\n🔀 Port 0.50.1 to main",
          "timestamp": "2023-03-06T05:42:17-05:00",
          "tree_id": "a8dd616ebe8ec9898d172cc4ff3b65e747c211da",
          "url": "https://github.com/greymistcube/libplanet/commit/d3bae116896d64908c86e567a069fbb85daae677"
        },
        "date": 1678121837435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7921810.7,
            "unit": "ns",
            "range": "± 67107.6967750879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22388802.05952381,
            "unit": "ns",
            "range": "± 4446539.476749966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53622359.8452381,
            "unit": "ns",
            "range": "± 4817358.489184499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97533153.2037037,
            "unit": "ns",
            "range": "± 2672855.6551863695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 198279716.8125,
            "unit": "ns",
            "range": "± 2787657.3301596856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68673,
            "unit": "ns",
            "range": "± 11702.894508686442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 228639.12921348316,
            "unit": "ns",
            "range": "± 23753.8367816568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230928.86559139786,
            "unit": "ns",
            "range": "± 28709.226286950416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210308.65217391305,
            "unit": "ns",
            "range": "± 29619.82285543885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12747650.969696969,
            "unit": "ns",
            "range": "± 590132.0486532841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10238679.579710145,
            "unit": "ns",
            "range": "± 491268.87880276877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23591.381443298967,
            "unit": "ns",
            "range": "± 5796.896627440876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59608.88202247191,
            "unit": "ns",
            "range": "± 7394.617562650212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61061.184782608696,
            "unit": "ns",
            "range": "± 7844.356210046531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131353.11458333334,
            "unit": "ns",
            "range": "± 15417.980478628322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8591.15306122449,
            "unit": "ns",
            "range": "± 1271.8055543530681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22866.64285714286,
            "unit": "ns",
            "range": "± 5295.3986410884345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1860561.7613636365,
            "unit": "ns",
            "range": "± 275067.8782728312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3065274.1511627906,
            "unit": "ns",
            "range": "± 206228.7808403295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2681023.6511627906,
            "unit": "ns",
            "range": "± 260704.57058781473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7021967.141304348,
            "unit": "ns",
            "range": "± 765931.6595875368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371099.6379310344,
            "unit": "ns",
            "range": "± 96703.21375318701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5222067.546666667,
            "unit": "ns",
            "range": "± 261338.91481598583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24084120.606382977,
            "unit": "ns",
            "range": "± 1372625.1711396584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6298325.285714285,
            "unit": "ns",
            "range": "± 538315.2901440504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29015456.97826087,
            "unit": "ns",
            "range": "± 2064039.5090938692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6203879.705208333,
            "unit": "ns",
            "range": "± 113420.83069466482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906281.8589154412,
            "unit": "ns",
            "range": "± 29225.112488490504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1267037.353881836,
            "unit": "ns",
            "range": "± 24772.055297356703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676726.667624081,
            "unit": "ns",
            "range": "± 51738.53730747269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844671.5412409856,
            "unit": "ns",
            "range": "± 9297.741074070622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 709777.9089006697,
            "unit": "ns",
            "range": "± 10847.314159023419"
          }
        ]
      }
    ]
  }
}