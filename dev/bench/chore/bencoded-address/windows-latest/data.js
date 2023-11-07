window.BENCHMARK_DATA = {
  "lastUpdate": 1699332862497,
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
          "id": "142e48097ebf05b86f61f397382388d721ecbd11",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T15:19:37+09:00",
          "tree_id": "0353fbdd6a340ae1c7174cc775146df82e769b4e",
          "url": "https://github.com/greymistcube/libplanet/commit/142e48097ebf05b86f61f397382388d721ecbd11"
        },
        "date": 1699255262856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1313137,
            "unit": "ns",
            "range": "± 100173.26268304161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2544741.8604651163,
            "unit": "ns",
            "range": "± 92042.46750836096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050888,
            "unit": "ns",
            "range": "± 153075.43283418714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8883782.02247191,
            "unit": "ns",
            "range": "± 537805.5232233112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55592.63157894737,
            "unit": "ns",
            "range": "± 5503.523863490867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7522160,
            "unit": "ns",
            "range": "± 88185.59001171499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20855607.14285714,
            "unit": "ns",
            "range": "± 186256.85930285262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52490464.28571428,
            "unit": "ns",
            "range": "± 866153.103233925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106327240,
            "unit": "ns",
            "range": "± 1731487.938079352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210089215.3846154,
            "unit": "ns",
            "range": "± 2340714.7155823135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4608095.535714285,
            "unit": "ns",
            "range": "± 15824.754894527861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1489996.9205729167,
            "unit": "ns",
            "range": "± 5950.533272367853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1110007.2823660714,
            "unit": "ns",
            "range": "± 2854.016318010259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617822.3828125,
            "unit": "ns",
            "range": "± 7758.616410790878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839987.16796875,
            "unit": "ns",
            "range": "± 3460.9214951711924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764849.5247395834,
            "unit": "ns",
            "range": "± 2746.838518744954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3255536.8421052634,
            "unit": "ns",
            "range": "± 70605.12422800106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3446102.0833333335,
            "unit": "ns",
            "range": "± 134693.72742757303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4174308.620689655,
            "unit": "ns",
            "range": "± 176633.5003139321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4063137.878787879,
            "unit": "ns",
            "range": "± 125921.58958449043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10015275,
            "unit": "ns",
            "range": "± 258534.841301258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271677.1929824561,
            "unit": "ns",
            "range": "± 11764.444275987158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258081.81818181818,
            "unit": "ns",
            "range": "± 12148.692985615418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231014.43298969071,
            "unit": "ns",
            "range": "± 16051.479615668884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4065157.1428571427,
            "unit": "ns",
            "range": "± 54390.266582368386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830178.947368421,
            "unit": "ns",
            "range": "± 81417.43997549752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20753.260869565216,
            "unit": "ns",
            "range": "± 2442.00651991086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92196.8085106383,
            "unit": "ns",
            "range": "± 7892.2372658018685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77486.59793814433,
            "unit": "ns",
            "range": "± 5747.92768573269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93947.95918367348,
            "unit": "ns",
            "range": "± 11556.871741605732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5885.714285714285,
            "unit": "ns",
            "range": "± 922.2339529194995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21952.808988764045,
            "unit": "ns",
            "range": "± 2024.0087297489856"
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
          "id": "19c898f4ba2c7990736271b30c2c6229e0153418",
          "message": "Use Address.Bencoded instead of Address.ByteArray",
          "timestamp": "2023-11-07T13:29:59+09:00",
          "tree_id": "ea3cfcea6fe14dec7636971cca2796d673d0f37c",
          "url": "https://github.com/greymistcube/libplanet/commit/19c898f4ba2c7990736271b30c2c6229e0153418"
        },
        "date": 1699332005196,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955101.0204081633,
            "unit": "ns",
            "range": "± 104145.57069724688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1665996,
            "unit": "ns",
            "range": "± 83426.31712588773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1413953.5353535353,
            "unit": "ns",
            "range": "± 151012.59936159357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5752394.444444444,
            "unit": "ns",
            "range": "± 408975.6668020785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32863.46153846154,
            "unit": "ns",
            "range": "± 1367.841988087095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4834460,
            "unit": "ns",
            "range": "± 40207.97362286668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12681916.666666666,
            "unit": "ns",
            "range": "± 149472.64760133333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 30748064.285714287,
            "unit": "ns",
            "range": "± 182697.64685084252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63916364.28571428,
            "unit": "ns",
            "range": "± 249599.59814792252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128473866.66666667,
            "unit": "ns",
            "range": "± 1893811.3225023486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3266231.3616071427,
            "unit": "ns",
            "range": "± 31236.24441824236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050046.0518973214,
            "unit": "ns",
            "range": "± 6337.957076357373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736883.1961495535,
            "unit": "ns",
            "range": "± 3290.007070700189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1859316.2239583333,
            "unit": "ns",
            "range": "± 25244.020511516825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627987.8385416666,
            "unit": "ns",
            "range": "± 1583.4549997570073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555467.36328125,
            "unit": "ns",
            "range": "± 2211.9113207320993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129917.3913043477,
            "unit": "ns",
            "range": "± 53779.394940424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2229745.4545454546,
            "unit": "ns",
            "range": "± 42641.49250573768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2641671.4285714286,
            "unit": "ns",
            "range": "± 94970.65859006853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2705396.4285714286,
            "unit": "ns",
            "range": "± 76941.12940540901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6327850,
            "unit": "ns",
            "range": "± 269840.98078144266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163132.0754716981,
            "unit": "ns",
            "range": "± 4887.022594622244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154504.83870967742,
            "unit": "ns",
            "range": "± 6607.985169955049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138000,
            "unit": "ns",
            "range": "± 2654.4773496867515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2705128.5714285714,
            "unit": "ns",
            "range": "± 35579.36801815665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486660,
            "unit": "ns",
            "range": "± 36933.23706365311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9994.623655913978,
            "unit": "ns",
            "range": "± 1320.7676943648316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49202.17391304348,
            "unit": "ns",
            "range": "± 3534.414114709402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43586.79245283019,
            "unit": "ns",
            "range": "± 1738.2614807118514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 41848.23529411765,
            "unit": "ns",
            "range": "± 3156.875028248282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2204.1666666666665,
            "unit": "ns",
            "range": "± 264.3429457777456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9466.666666666666,
            "unit": "ns",
            "range": "± 1430.212308147574"
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
          "id": "390d98ad0007bc5981330ca61d6120312d7b8164",
          "message": "Use Address.Bencoded instead of Address.ByteArray",
          "timestamp": "2023-11-07T13:34:16+09:00",
          "tree_id": "ea3cfcea6fe14dec7636971cca2796d673d0f37c",
          "url": "https://github.com/greymistcube/libplanet/commit/390d98ad0007bc5981330ca61d6120312d7b8164"
        },
        "date": 1699332826342,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1508774.7368421052,
            "unit": "ns",
            "range": "± 102569.6784115622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2911576.923076923,
            "unit": "ns",
            "range": "± 120148.16117396121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2262282.2580645164,
            "unit": "ns",
            "range": "± 101632.91309573763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9886279.661016949,
            "unit": "ns",
            "range": "± 435654.9286081506"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60858.163265306124,
            "unit": "ns",
            "range": "± 6639.493265184511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9292546.969696969,
            "unit": "ns",
            "range": "± 286526.7532064507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24891200,
            "unit": "ns",
            "range": "± 310082.87725901726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62978007.692307696,
            "unit": "ns",
            "range": "± 276387.1453280056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123941228.57142857,
            "unit": "ns",
            "range": "± 1798224.87702502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247596571.42857143,
            "unit": "ns",
            "range": "± 3984714.551388086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5532949.720982143,
            "unit": "ns",
            "range": "± 47028.85414651205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1795321.6238839286,
            "unit": "ns",
            "range": "± 9317.354460289676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320993.4645432692,
            "unit": "ns",
            "range": "± 6320.894412426213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3116367.6618303573,
            "unit": "ns",
            "range": "± 14474.124884267178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1019412.65625,
            "unit": "ns",
            "range": "± 6631.815244786884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 914561.9070870535,
            "unit": "ns",
            "range": "± 6393.465691363935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3828700,
            "unit": "ns",
            "range": "± 151709.15293196167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3929232.2580645164,
            "unit": "ns",
            "range": "± 99699.0952386121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4951921.428571428,
            "unit": "ns",
            "range": "± 77213.20312138162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4639425,
            "unit": "ns",
            "range": "± 162984.30220716793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11800140.277777778,
            "unit": "ns",
            "range": "± 583270.6888948436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292508.6956521739,
            "unit": "ns",
            "range": "± 11265.933429532033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291004.6511627907,
            "unit": "ns",
            "range": "± 9891.62593135686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264760.20408163266,
            "unit": "ns",
            "range": "± 17226.662024141642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4864283.333333333,
            "unit": "ns",
            "range": "± 123798.5167666527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4353310.52631579,
            "unit": "ns",
            "range": "± 92053.45605641227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23497.938144329895,
            "unit": "ns",
            "range": "± 2169.292289619056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101529.38144329897,
            "unit": "ns",
            "range": "± 8237.17359171632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83785.48387096774,
            "unit": "ns",
            "range": "± 6096.072241549762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99774.73684210527,
            "unit": "ns",
            "range": "± 10149.6354448844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6069.791666666667,
            "unit": "ns",
            "range": "± 1014.2271926179135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22482.978723404256,
            "unit": "ns",
            "range": "± 1574.1622313869796"
          }
        ]
      }
    ]
  }
}