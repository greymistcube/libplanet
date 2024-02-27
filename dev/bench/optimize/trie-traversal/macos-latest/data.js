window.BENCHMARK_DATA = {
  "lastUpdate": 1709024516009,
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
          "id": "944369e564459c008868c197e3dad60be589a32d",
          "message": "Changed ITrie.IterateNodes() to use a stack instead of a queue",
          "timestamp": "2024-02-27T16:52:46+09:00",
          "tree_id": "2f8d8ac0f86ec7b61eecae2b1b8a34ddcc03056d",
          "url": "https://github.com/greymistcube/libplanet/commit/944369e564459c008868c197e3dad60be589a32d"
        },
        "date": 1709021244568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7644971.333333333,
            "unit": "ns",
            "range": "± 161883.4584897056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18884035.214285713,
            "unit": "ns",
            "range": "± 155284.65770427923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46450888,
            "unit": "ns",
            "range": "± 552161.7858686473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91934498.14285715,
            "unit": "ns",
            "range": "± 1310382.537374538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192292595.34615386,
            "unit": "ns",
            "range": "± 1777042.2523938408"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33518.74444444444,
            "unit": "ns",
            "range": "± 3208.0304278626136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223866.2,
            "unit": "ns",
            "range": "± 21281.922801268425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215242.39361702127,
            "unit": "ns",
            "range": "± 20583.139744229902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187729.18367346938,
            "unit": "ns",
            "range": "± 5502.4412069911805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3872726.379310345,
            "unit": "ns",
            "range": "± 101616.51389710722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3417889.9210526315,
            "unit": "ns",
            "range": "± 75844.861766427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12337.341463414634,
            "unit": "ns",
            "range": "± 658.9520574837213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58931.71276595745,
            "unit": "ns",
            "range": "± 5940.2359477999025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52216.970588235294,
            "unit": "ns",
            "range": "± 3349.8556812845195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62005.978494623654,
            "unit": "ns",
            "range": "± 11180.141359822755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3469.887640449438,
            "unit": "ns",
            "range": "± 455.6955083416758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11951.76923076923,
            "unit": "ns",
            "range": "± 737.8301381893484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012139.4210526316,
            "unit": "ns",
            "range": "± 61388.10751391492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2228094.0977011495,
            "unit": "ns",
            "range": "± 121454.24075561266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1734841.9795918367,
            "unit": "ns",
            "range": "± 107966.66900502586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11630459.448979592,
            "unit": "ns",
            "range": "± 3968959.579299759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2905281.6585365855,
            "unit": "ns",
            "range": "± 102506.62413756727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3006187.5,
            "unit": "ns",
            "range": "± 67530.70897980999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3558188.3863636362,
            "unit": "ns",
            "range": "± 125381.21714459948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3740838.352112676,
            "unit": "ns",
            "range": "± 183108.05389457877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16311970.774725275,
            "unit": "ns",
            "range": "± 2002196.4460762592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4426085.0546875,
            "unit": "ns",
            "range": "± 73447.62143675725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1313917.3446614584,
            "unit": "ns",
            "range": "± 10652.753680706557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 874691.9905831473,
            "unit": "ns",
            "range": "± 15087.544671122023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2434408.796472294,
            "unit": "ns",
            "range": "± 363192.75277385296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 717144.8638095543,
            "unit": "ns",
            "range": "± 32165.650162987484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591295.6902960526,
            "unit": "ns",
            "range": "± 33590.84300777322"
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
          "id": "7803237599b7726afe7dba31bc0fcefd5110038a",
          "message": "Changelog",
          "timestamp": "2024-02-27T16:56:26+09:00",
          "tree_id": "c98df0332e776053d82280efe54629ec56ba5988",
          "url": "https://github.com/greymistcube/libplanet/commit/7803237599b7726afe7dba31bc0fcefd5110038a"
        },
        "date": 1709021315478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7641104.923076923,
            "unit": "ns",
            "range": "± 19655.264301036244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19253982.230769232,
            "unit": "ns",
            "range": "± 454467.7358648297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47563516.28571428,
            "unit": "ns",
            "range": "± 624542.178324796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93457422.57142857,
            "unit": "ns",
            "range": "± 729524.7983771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192976556.13333333,
            "unit": "ns",
            "range": "± 2036102.7187158267"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36014.25806451613,
            "unit": "ns",
            "range": "± 3684.226601346628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220803.55555555556,
            "unit": "ns",
            "range": "± 10880.15517687714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213846.7142857143,
            "unit": "ns",
            "range": "± 8959.68892867946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197256.82978723405,
            "unit": "ns",
            "range": "± 13906.985033357443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4045628.9482758623,
            "unit": "ns",
            "range": "± 115262.8933635707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3476975.9615384615,
            "unit": "ns",
            "range": "± 35459.429781595434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12900.847826086956,
            "unit": "ns",
            "range": "± 1090.5145920572213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62636.78421052632,
            "unit": "ns",
            "range": "± 6870.991299633674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54660.77777777778,
            "unit": "ns",
            "range": "± 3450.081121918038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63305.927083333336,
            "unit": "ns",
            "range": "± 9895.93864194567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3299.6264367816093,
            "unit": "ns",
            "range": "± 339.2826496978486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12863.757894736842,
            "unit": "ns",
            "range": "± 1789.2299527283242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1170017.268292683,
            "unit": "ns",
            "range": "± 41216.120745422166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2291550.689189189,
            "unit": "ns",
            "range": "± 114795.4700077461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1796686.73,
            "unit": "ns",
            "range": "± 118447.05100642347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8834813.387755102,
            "unit": "ns",
            "range": "± 270971.96889214206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3003493.525252525,
            "unit": "ns",
            "range": "± 176250.13625551795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3050517.242857143,
            "unit": "ns",
            "range": "± 148303.88212675924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3641475.212121212,
            "unit": "ns",
            "range": "± 103501.40158796086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3776740.1428571427,
            "unit": "ns",
            "range": "± 193371.49743200975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16311480.21978022,
            "unit": "ns",
            "range": "± 1770610.6987242615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4455431.952604166,
            "unit": "ns",
            "range": "± 36840.29681448679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1346584.504657452,
            "unit": "ns",
            "range": "± 4520.595927760349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 891712.7502790178,
            "unit": "ns",
            "range": "± 6832.046943369854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999769.4071514423,
            "unit": "ns",
            "range": "± 16444.662738645304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647040.0568498884,
            "unit": "ns",
            "range": "± 8141.699983312824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573954.9579264323,
            "unit": "ns",
            "range": "± 2129.745286607106"
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
          "id": "8a838ec5e5f91c2d94add8b0d3121dc95996a126",
          "message": "Changelog",
          "timestamp": "2024-02-27T17:42:13+09:00",
          "tree_id": "002a21f275387dc74bf574f0a6d987346d19ef2a",
          "url": "https://github.com/greymistcube/libplanet/commit/8a838ec5e5f91c2d94add8b0d3121dc95996a126"
        },
        "date": 1709024501595,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8834009.28125,
            "unit": "ns",
            "range": "± 539178.7224647886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22956325.941860463,
            "unit": "ns",
            "range": "± 1245427.254274684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53752217.02941176,
            "unit": "ns",
            "range": "± 1717137.34042809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110221757.52040817,
            "unit": "ns",
            "range": "± 4057252.452311059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239049748.48809522,
            "unit": "ns",
            "range": "± 12776294.000653394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79647.48913043478,
            "unit": "ns",
            "range": "± 7914.933997620809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355489.8222222222,
            "unit": "ns",
            "range": "± 56420.38945291499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333593.12765957444,
            "unit": "ns",
            "range": "± 37769.66388553834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316026.68279569893,
            "unit": "ns",
            "range": "± 29244.199929940118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4652555.053763441,
            "unit": "ns",
            "range": "± 294757.76723919256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4307389.902061855,
            "unit": "ns",
            "range": "± 381942.0000351728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22790.704301075268,
            "unit": "ns",
            "range": "± 4949.161952683943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126695.21649484536,
            "unit": "ns",
            "range": "± 23195.049471019855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111588.60638297872,
            "unit": "ns",
            "range": "± 16206.300694594516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111221.15625,
            "unit": "ns",
            "range": "± 17948.83530854366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6438.239583333333,
            "unit": "ns",
            "range": "± 1564.144714968546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21008.85714285714,
            "unit": "ns",
            "range": "± 5107.978576616708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1702220.5384615385,
            "unit": "ns",
            "range": "± 26091.5935332161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2826344.3666666667,
            "unit": "ns",
            "range": "± 142618.89215008338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2619771.1021505375,
            "unit": "ns",
            "range": "± 215160.06562098084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 17967327.15,
            "unit": "ns",
            "range": "± 6432926.390163672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3639875.3608247424,
            "unit": "ns",
            "range": "± 323033.15001895785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3934364.4793814435,
            "unit": "ns",
            "range": "± 430619.9913938037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4814300.584210526,
            "unit": "ns",
            "range": "± 428237.0168441141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4991270.783505155,
            "unit": "ns",
            "range": "± 465084.60815276275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26179073.994505495,
            "unit": "ns",
            "range": "± 4331866.881275905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5783812.690848215,
            "unit": "ns",
            "range": "± 100107.74223012751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1746006.039341518,
            "unit": "ns",
            "range": "± 16360.365667378208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1050133.2095052083,
            "unit": "ns",
            "range": "± 14344.380350183445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2729917.946940104,
            "unit": "ns",
            "range": "± 96672.37348426899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 785069.871469351,
            "unit": "ns",
            "range": "± 2330.4173357236805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 712938.8162109375,
            "unit": "ns",
            "range": "± 3968.465247630214"
          }
        ]
      }
    ]
  }
}