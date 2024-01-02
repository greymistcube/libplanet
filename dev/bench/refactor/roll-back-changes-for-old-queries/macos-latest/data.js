window.BENCHMARK_DATA = {
  "lastUpdate": 1704204467398,
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
          "id": "f12184e29d683f480dd46778870e43c10233e50a",
          "message": "Roll back exposed GraphQL API changes by adding LegacyBencodexValueType",
          "timestamp": "2024-01-02T22:40:20+09:00",
          "tree_id": "f983da298ebf7f6783db8aa8342ab7ceefac443f",
          "url": "https://github.com/greymistcube/libplanet/commit/f12184e29d683f480dd46778870e43c10233e50a"
        },
        "date": 1704203661225,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7765700.125,
            "unit": "ns",
            "range": "± 200801.23370318924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18754472.214285713,
            "unit": "ns",
            "range": "± 169043.6456154166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46448323,
            "unit": "ns",
            "range": "± 647630.0245312193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93376786.21428572,
            "unit": "ns",
            "range": "± 1392251.2614694994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197934583,
            "unit": "ns",
            "range": "± 3157871.254659306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36142.252873563215,
            "unit": "ns",
            "range": "± 4650.219967836458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235465.98936170212,
            "unit": "ns",
            "range": "± 14166.599108879785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219551.6265822785,
            "unit": "ns",
            "range": "± 11421.057670684657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221594.26041666666,
            "unit": "ns",
            "range": "± 14863.773444356368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3838531.1875,
            "unit": "ns",
            "range": "± 72163.74942745954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3511053.923076923,
            "unit": "ns",
            "range": "± 29530.22016077073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17074.060606060608,
            "unit": "ns",
            "range": "± 3240.4043455747983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75130.42857142857,
            "unit": "ns",
            "range": "± 10774.758850603563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78500.61224489796,
            "unit": "ns",
            "range": "± 11368.56696251052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79145.87931034483,
            "unit": "ns",
            "range": "± 11027.057468981384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5267.535353535353,
            "unit": "ns",
            "range": "± 1850.4029969950857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20318.895833333332,
            "unit": "ns",
            "range": "± 2594.2295782803344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058110.3541666667,
            "unit": "ns",
            "range": "± 82548.90505697108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2267258.1363636362,
            "unit": "ns",
            "range": "± 123843.65353009553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1516298.5747126436,
            "unit": "ns",
            "range": "± 82377.21124344559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6802085.704301075,
            "unit": "ns",
            "range": "± 414759.8032299134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3014101.918918919,
            "unit": "ns",
            "range": "± 98130.78018824855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2984738.21875,
            "unit": "ns",
            "range": "± 118474.05366945128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3604448.15,
            "unit": "ns",
            "range": "± 82164.7921572219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3457694.8205128205,
            "unit": "ns",
            "range": "± 119518.13206082598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13243572.171717172,
            "unit": "ns",
            "range": "± 2057666.6690467333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4707617.959134615,
            "unit": "ns",
            "range": "± 68945.82338912573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1416727.279296875,
            "unit": "ns",
            "range": "± 19849.057879471933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 905152.7047526041,
            "unit": "ns",
            "range": "± 19676.454611256908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2195416.2202034886,
            "unit": "ns",
            "range": "± 119072.6836178642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 665767.828441723,
            "unit": "ns",
            "range": "± 22505.18100623844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571582.8564453125,
            "unit": "ns",
            "range": "± 7042.927414062586"
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
          "id": "24a7e67501c7a128e5d2e6edcf960115525bbbcb",
          "message": "Changelog",
          "timestamp": "2024-01-02T22:51:38+09:00",
          "tree_id": "3c8dd8c8e28d5b04d48efc66c1ae418f28de7ad8",
          "url": "https://github.com/greymistcube/libplanet/commit/24a7e67501c7a128e5d2e6edcf960115525bbbcb"
        },
        "date": 1704204294003,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7562703.166666667,
            "unit": "ns",
            "range": "± 50273.832779422475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18992273.04761905,
            "unit": "ns",
            "range": "± 433061.04448916623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46353242.666666664,
            "unit": "ns",
            "range": "± 805831.6431052249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97965105.78571428,
            "unit": "ns",
            "range": "± 2288840.4016970065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191391680.16666666,
            "unit": "ns",
            "range": "± 3221074.199936494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40548.31914893617,
            "unit": "ns",
            "range": "± 6857.408927831295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222387.63541666666,
            "unit": "ns",
            "range": "± 23536.448687143136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213892.90625,
            "unit": "ns",
            "range": "± 19227.436731251422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182451.3962264151,
            "unit": "ns",
            "range": "± 5763.490183038874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3730912,
            "unit": "ns",
            "range": "± 35205.02479760524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3452127.1,
            "unit": "ns",
            "range": "± 59041.85187741222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12646.284210526315,
            "unit": "ns",
            "range": "± 947.4488215354386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58342.055555555555,
            "unit": "ns",
            "range": "± 4395.885257090785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53148.406593406595,
            "unit": "ns",
            "range": "± 3609.1600776604887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59916.9587628866,
            "unit": "ns",
            "range": "± 10280.154675106553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4564.104166666667,
            "unit": "ns",
            "range": "± 1583.8716952233926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17623.621052631577,
            "unit": "ns",
            "range": "± 3806.4300558088335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1163858.9719101123,
            "unit": "ns",
            "range": "± 141871.1547135359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2318143.3658536584,
            "unit": "ns",
            "range": "± 122257.25124168766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1652674.0107526882,
            "unit": "ns",
            "range": "± 145743.5044432583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7503623.454545454,
            "unit": "ns",
            "range": "± 955950.1816241588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2890404.8571428573,
            "unit": "ns",
            "range": "± 49184.31563768324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2903633.5405405406,
            "unit": "ns",
            "range": "± 76257.77041958654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3568461.4166666665,
            "unit": "ns",
            "range": "± 101569.3108024199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3378029.275862069,
            "unit": "ns",
            "range": "± 138581.83862136104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12807971.54736842,
            "unit": "ns",
            "range": "± 1937375.3990203035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4401944.761039402,
            "unit": "ns",
            "range": "± 161331.90308591767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1392239.384548611,
            "unit": "ns",
            "range": "± 44261.94502267958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 900341.3568638393,
            "unit": "ns",
            "range": "± 9154.696002294355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2066657.1419270833,
            "unit": "ns",
            "range": "± 23436.004477191047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635493.0901041667,
            "unit": "ns",
            "range": "± 7915.289953822515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574198.896344866,
            "unit": "ns",
            "range": "± 3821.390684580263"
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
          "id": "14195aed74f84db63008589a07b131e635f84ea9",
          "message": "Changelog",
          "timestamp": "2024-01-02T22:50:05+09:00",
          "tree_id": "b5c7655d8f7b38eb6c79a3965935caaa3fe4a711",
          "url": "https://github.com/greymistcube/libplanet/commit/14195aed74f84db63008589a07b131e635f84ea9"
        },
        "date": 1704204449330,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7563687.230769231,
            "unit": "ns",
            "range": "± 113624.62958293407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18939952.066666666,
            "unit": "ns",
            "range": "± 249291.4217283707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46170445.35714286,
            "unit": "ns",
            "range": "± 767214.8607781674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92552729.58823529,
            "unit": "ns",
            "range": "± 1826088.5092849778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187470836.66666666,
            "unit": "ns",
            "range": "± 2458687.474303099"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33021.196202531646,
            "unit": "ns",
            "range": "± 1719.7164297731033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220845.2365591398,
            "unit": "ns",
            "range": "± 14327.194272642504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206688.11666666667,
            "unit": "ns",
            "range": "± 8814.828865911733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194533.5157894737,
            "unit": "ns",
            "range": "± 22461.141398719228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3718970.111111111,
            "unit": "ns",
            "range": "± 78481.5140392863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3448149.9444444445,
            "unit": "ns",
            "range": "± 73791.67029767155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12232.887640449439,
            "unit": "ns",
            "range": "± 864.9282607955289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58701.36170212766,
            "unit": "ns",
            "range": "± 5121.032128517961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50612.06172839506,
            "unit": "ns",
            "range": "± 2648.5813388759607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58989.978494623654,
            "unit": "ns",
            "range": "± 10390.113806526664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3149.0106382978724,
            "unit": "ns",
            "range": "± 323.4097070208115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11509.90909090909,
            "unit": "ns",
            "range": "± 755.0843240778672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1055414.6818181819,
            "unit": "ns",
            "range": "± 110643.21591820128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2231686.4318181816,
            "unit": "ns",
            "range": "± 122529.7790501854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524556.042105263,
            "unit": "ns",
            "range": "± 111394.24653062594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6653343.926829268,
            "unit": "ns",
            "range": "± 360363.5301797675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2901958.327586207,
            "unit": "ns",
            "range": "± 123196.96076710032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3129789.785714286,
            "unit": "ns",
            "range": "± 42767.808073504166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3612482.6447368423,
            "unit": "ns",
            "range": "± 180973.02238036873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3452851.203703704,
            "unit": "ns",
            "range": "± 181353.49379323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12865730.052083334,
            "unit": "ns",
            "range": "± 1849829.659372695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4271026.644791666,
            "unit": "ns",
            "range": "± 52596.66311332918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1350275.9468149038,
            "unit": "ns",
            "range": "± 17836.757079492294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1094198.251434949,
            "unit": "ns",
            "range": "± 196784.0812156759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2296828.8834635415,
            "unit": "ns",
            "range": "± 470128.1903626714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 687506.8180683791,
            "unit": "ns",
            "range": "± 70022.89120872265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 653103.5484375,
            "unit": "ns",
            "range": "± 45126.95126055696"
          }
        ]
      }
    ]
  }
}