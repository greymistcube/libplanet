window.BENCHMARK_DATA = {
  "lastUpdate": 1693381448439,
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
          "id": "ce517db3abbe0e18c4a4adeb6bca2fa90277e54d",
          "message": "Propogate Nibbles",
          "timestamp": "2023-08-30T10:34:04+09:00",
          "tree_id": "cc00a44ef2dd3cb22070002c104dd70e39fed669",
          "url": "https://github.com/greymistcube/libplanet/commit/ce517db3abbe0e18c4a4adeb6bca2fa90277e54d"
        },
        "date": 1693374751210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8219286.576923077,
            "unit": "ns",
            "range": "± 136890.68869811267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21229259.060606062,
            "unit": "ns",
            "range": "± 666514.583484391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52452859.23076923,
            "unit": "ns",
            "range": "± 589856.7189517516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103994531.53846154,
            "unit": "ns",
            "range": "± 960826.7198686778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212019632.84615386,
            "unit": "ns",
            "range": "± 2966050.5144557087"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69123.19565217392,
            "unit": "ns",
            "range": "± 10912.578602351892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315944.21276595746,
            "unit": "ns",
            "range": "± 27639.411633745396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317748.5208333333,
            "unit": "ns",
            "range": "± 35720.481991791174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304145.03684210527,
            "unit": "ns",
            "range": "± 20071.462873151748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4238368.523809524,
            "unit": "ns",
            "range": "± 151256.3616007424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822390.75,
            "unit": "ns",
            "range": "± 103708.71129180254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20250.333333333332,
            "unit": "ns",
            "range": "± 2116.0167528993534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89725.06451612903,
            "unit": "ns",
            "range": "± 8264.690659150203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94863.28888888888,
            "unit": "ns",
            "range": "± 7879.926524274514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104303.4693877551,
            "unit": "ns",
            "range": "± 16470.405684325742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7074.363157894737,
            "unit": "ns",
            "range": "± 826.7369929688118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19318.521276595744,
            "unit": "ns",
            "range": "± 1853.1815231128749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655429.883838384,
            "unit": "ns",
            "range": "± 197568.9120708295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2942731.815217391,
            "unit": "ns",
            "range": "± 176025.2757802553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2124813.484848485,
            "unit": "ns",
            "range": "± 219219.75026347156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6169071.327956989,
            "unit": "ns",
            "range": "± 487241.28675580065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308742.5595238097,
            "unit": "ns",
            "range": "± 175834.1854019985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3550870.9864864866,
            "unit": "ns",
            "range": "± 120034.44691921234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4484100.481481481,
            "unit": "ns",
            "range": "± 186396.60201603002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3956253.0967741935,
            "unit": "ns",
            "range": "± 178121.96250181698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7528044.892473118,
            "unit": "ns",
            "range": "± 498731.04023272777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5661078.506138393,
            "unit": "ns",
            "range": "± 89489.410760788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1804108.0126953125,
            "unit": "ns",
            "range": "± 29389.73792446829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1033692.8374399039,
            "unit": "ns",
            "range": "± 15327.806292593257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627446.326041667,
            "unit": "ns",
            "range": "± 45689.82115215126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820937.4558454241,
            "unit": "ns",
            "range": "± 9415.422393728899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800257.7877371652,
            "unit": "ns",
            "range": "± 12889.0545884556"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "129e403b507e77e1676d01327687a498f62a321a",
          "message": "Propogate Nibbles",
          "timestamp": "2023-08-30T16:14:02+09:00",
          "tree_id": "5b943276cdf60cb2702d638a64a6808766abecab",
          "url": "https://github.com/greymistcube/libplanet/commit/129e403b507e77e1676d01327687a498f62a321a"
        },
        "date": 1693381239372,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12819798.478723405,
            "unit": "ns",
            "range": "± 2634285.1847504554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31765901.666666668,
            "unit": "ns",
            "range": "± 5860481.302645284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 83257450.52105263,
            "unit": "ns",
            "range": "± 8343459.78442287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 155512188.34,
            "unit": "ns",
            "range": "± 39586126.56566247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288015358,
            "unit": "ns",
            "range": "± 45618252.18102654"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 89062.37931034483,
            "unit": "ns",
            "range": "± 8329.841962600041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 420880.5652173913,
            "unit": "ns",
            "range": "± 86945.96486315342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356567.683908046,
            "unit": "ns",
            "range": "± 29496.865983910244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 378465.60638297873,
            "unit": "ns",
            "range": "± 67051.27414607583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5172551.561797753,
            "unit": "ns",
            "range": "± 773488.9421298525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4352032.859550562,
            "unit": "ns",
            "range": "± 409165.8088399673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30814.409090909092,
            "unit": "ns",
            "range": "± 2873.1172411330026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132639.03225806452,
            "unit": "ns",
            "range": "± 18994.36485052962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127390.94827586207,
            "unit": "ns",
            "range": "± 8645.99308156556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135992.09375,
            "unit": "ns",
            "range": "± 19573.551080652378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10944.119565217392,
            "unit": "ns",
            "range": "± 1102.3513913188779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30887.333333333332,
            "unit": "ns",
            "range": "± 3236.0098514106785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1843963.021978022,
            "unit": "ns",
            "range": "± 318107.4009363287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3263170.0659340657,
            "unit": "ns",
            "range": "± 372122.99092026014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2353080.5319148935,
            "unit": "ns",
            "range": "± 379805.1844068149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6926460.775862069,
            "unit": "ns",
            "range": "± 1358897.7956243227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3659790.785714286,
            "unit": "ns",
            "range": "± 523121.32767817145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3716227.630952381,
            "unit": "ns",
            "range": "± 394690.6350898247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4703702.142857143,
            "unit": "ns",
            "range": "± 359094.8884986346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5460283.311827957,
            "unit": "ns",
            "range": "± 1593725.7490416912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11599624.1875,
            "unit": "ns",
            "range": "± 3502894.88402818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6671311.788602941,
            "unit": "ns",
            "range": "± 129057.11609759812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2324933.7934375,
            "unit": "ns",
            "range": "± 503106.09457929345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1325670.7411320233,
            "unit": "ns",
            "range": "± 257869.72183740305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3149782.4407269023,
            "unit": "ns",
            "range": "± 335466.18403070635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1273069.1532907197,
            "unit": "ns",
            "range": "± 358927.96911664656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777610.238265749,
            "unit": "ns",
            "range": "± 35691.9325905604"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "bac9657b4695325b01efb805c245f1ed78e35e4f",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:24:59+09:00",
          "tree_id": "0299de6e193f1bfee715e34eafd805368824054a",
          "url": "https://github.com/greymistcube/libplanet/commit/bac9657b4695325b01efb805c245f1ed78e35e4f"
        },
        "date": 1693381426292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8935838.736842105,
            "unit": "ns",
            "range": "± 383322.87750730856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22295676.22,
            "unit": "ns",
            "range": "± 1101672.2181801205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55528920.95,
            "unit": "ns",
            "range": "± 1266560.7406217281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112735672.41666667,
            "unit": "ns",
            "range": "± 2855285.3551782193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225868962.3918919,
            "unit": "ns",
            "range": "± 7565992.4204364875"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72785.58510638298,
            "unit": "ns",
            "range": "± 13200.579364655609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348512.5104166667,
            "unit": "ns",
            "range": "± 36129.10952826202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351111.63440860214,
            "unit": "ns",
            "range": "± 31653.906386713206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330230.0326086957,
            "unit": "ns",
            "range": "± 33093.1304376567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4323188.398305085,
            "unit": "ns",
            "range": "± 191449.2871959871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3965779.7,
            "unit": "ns",
            "range": "± 159251.74681616525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27229.677419354837,
            "unit": "ns",
            "range": "± 2933.31561978002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124725.8111111111,
            "unit": "ns",
            "range": "± 10719.613903457579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117698.19318181818,
            "unit": "ns",
            "range": "± 7066.214676812727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113201.84210526316,
            "unit": "ns",
            "range": "± 15797.21623760917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8744.036842105263,
            "unit": "ns",
            "range": "± 1730.9443542964552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23410.132653061224,
            "unit": "ns",
            "range": "± 5147.214557284026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1515467.3265306123,
            "unit": "ns",
            "range": "± 183568.3467063721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2867543.011494253,
            "unit": "ns",
            "range": "± 168909.4954606725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2043127.3163265307,
            "unit": "ns",
            "range": "± 208756.04869382764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5798015.731958763,
            "unit": "ns",
            "range": "± 354113.4000643519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3522974.6,
            "unit": "ns",
            "range": "± 263295.63144493534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3783629.0303030303,
            "unit": "ns",
            "range": "± 274890.6885394686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4537598.273195877,
            "unit": "ns",
            "range": "± 261770.04009142995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4162726.5408163266,
            "unit": "ns",
            "range": "± 367485.6612274437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7308452.59375,
            "unit": "ns",
            "range": "± 574790.298516773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6257101.715144231,
            "unit": "ns",
            "range": "± 82855.5517823266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1716011.269810268,
            "unit": "ns",
            "range": "± 27806.30365259651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046600.84046875,
            "unit": "ns",
            "range": "± 25881.434207485097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643709.0398995536,
            "unit": "ns",
            "range": "± 46200.472967502494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853553.7944335938,
            "unit": "ns",
            "range": "± 16745.278865430268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728355.2165364583,
            "unit": "ns",
            "range": "± 7002.4266606751835"
          }
        ]
      }
    ]
  }
}