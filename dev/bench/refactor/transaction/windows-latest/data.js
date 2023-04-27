window.BENCHMARK_DATA = {
  "lastUpdate": 1682574836139,
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
          "id": "be2728468029bd04f0280085ec779ebef5413c1a",
          "message": "Cleanup; renaming",
          "timestamp": "2023-04-26T18:22:11+09:00",
          "tree_id": "f33b659d8a09bd7e55f381b8a52753879e68356d",
          "url": "https://github.com/greymistcube/libplanet/commit/be2728468029bd04f0280085ec779ebef5413c1a"
        },
        "date": 1682501865255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309501.0416666667,
            "unit": "ns",
            "range": "± 112877.16565018496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2355204.0816326533,
            "unit": "ns",
            "range": "± 93475.33533679636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2015623,
            "unit": "ns",
            "range": "± 140965.58993763212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5075512,
            "unit": "ns",
            "range": "± 324317.46115823183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48956.09756097561,
            "unit": "ns",
            "range": "± 2626.789692596227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7080700,
            "unit": "ns",
            "range": "± 148448.71542425387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19656703.333333332,
            "unit": "ns",
            "range": "± 300917.1358807382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49342950,
            "unit": "ns",
            "range": "± 915568.8279242946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96958180,
            "unit": "ns",
            "range": "± 1746167.1378029243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191646784.21052632,
            "unit": "ns",
            "range": "± 4060437.2201994807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4751340.260416667,
            "unit": "ns",
            "range": "± 25176.704465483173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1494917.4479166667,
            "unit": "ns",
            "range": "± 11448.194472244943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153363.4486607143,
            "unit": "ns",
            "range": "± 6618.3451019517215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607444.5442708335,
            "unit": "ns",
            "range": "± 12884.99729940524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822664.5768229166,
            "unit": "ns",
            "range": "± 5131.441501459946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755941.2179129465,
            "unit": "ns",
            "range": "± 2808.5525948723816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3025110,
            "unit": "ns",
            "range": "± 88463.3972622147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3375383.3333333335,
            "unit": "ns",
            "range": "± 62315.12848494528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3855485.294117647,
            "unit": "ns",
            "range": "± 79166.52497407341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3975960.7843137253,
            "unit": "ns",
            "range": "± 160424.49698026964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6208053.333333333,
            "unit": "ns",
            "range": "± 184466.43790306052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260962.16216216216,
            "unit": "ns",
            "range": "± 8699.14910753892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240541.17647058822,
            "unit": "ns",
            "range": "± 9088.810185510274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205054.54545454544,
            "unit": "ns",
            "range": "± 4860.112410293886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3753900,
            "unit": "ns",
            "range": "± 58552.27930460697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3462571.4285714286,
            "unit": "ns",
            "range": "± 48233.33396619505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20586.458333333332,
            "unit": "ns",
            "range": "± 2302.7498340561474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82823.4693877551,
            "unit": "ns",
            "range": "± 6028.365954940201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74867.67676767676,
            "unit": "ns",
            "range": "± 5536.978257225268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97742.85714285714,
            "unit": "ns",
            "range": "± 20604.985133970225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6561.458333333333,
            "unit": "ns",
            "range": "± 1132.242283135239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20185.858585858587,
            "unit": "ns",
            "range": "± 3017.838464896049"
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
          "id": "7c5826ddffe796f0bf864a730a00e2033503021f",
          "message": "Simplified JSON serialization",
          "timestamp": "2023-04-27T11:25:31+09:00",
          "tree_id": "5a71e80f98801528503d3c2898074ec13f4284ad",
          "url": "https://github.com/greymistcube/libplanet/commit/7c5826ddffe796f0bf864a730a00e2033503021f"
        },
        "date": 1682564058070,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1331194.7916666667,
            "unit": "ns",
            "range": "± 123379.92958832202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2577718.556701031,
            "unit": "ns",
            "range": "± 157587.86790357687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171029.5918367347,
            "unit": "ns",
            "range": "± 141187.6153334386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5449946,
            "unit": "ns",
            "range": "± 337138.61742253107"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50815.78947368421,
            "unit": "ns",
            "range": "± 4922.145263780862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7327957.692307692,
            "unit": "ns",
            "range": "± 196655.21538586647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19616120,
            "unit": "ns",
            "range": "± 106819.7293173343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51314991.666666664,
            "unit": "ns",
            "range": "± 252594.26128345303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96458333.33333333,
            "unit": "ns",
            "range": "± 1413297.8482537884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190745684.6153846,
            "unit": "ns",
            "range": "± 2612257.457910735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4791207.366071428,
            "unit": "ns",
            "range": "± 24456.81465181792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1531028.6283052885,
            "unit": "ns",
            "range": "± 4672.88074190696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172289.9479166667,
            "unit": "ns",
            "range": "± 6737.5709090624405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685583.370535714,
            "unit": "ns",
            "range": "± 9405.602601966633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831030.1081730769,
            "unit": "ns",
            "range": "± 2647.109891574595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775624.0104166666,
            "unit": "ns",
            "range": "± 4377.885237493245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3174889.189189189,
            "unit": "ns",
            "range": "± 105862.15036489615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3541556.25,
            "unit": "ns",
            "range": "± 64117.52717991132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3991123.529411765,
            "unit": "ns",
            "range": "± 76434.66596881748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4234357.894736842,
            "unit": "ns",
            "range": "± 183523.86857939177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6573285.714285715,
            "unit": "ns",
            "range": "± 187876.1248985041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271968.6274509804,
            "unit": "ns",
            "range": "± 10379.662618718941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260989.83050847458,
            "unit": "ns",
            "range": "± 11272.17653179193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227245.45454545456,
            "unit": "ns",
            "range": "± 12167.177527529377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3916757.1428571427,
            "unit": "ns",
            "range": "± 57417.602692041226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3524321.4285714286,
            "unit": "ns",
            "range": "± 62071.89911176119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20154.945054945056,
            "unit": "ns",
            "range": "± 1526.8168584246503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89783.33333333333,
            "unit": "ns",
            "range": "± 5831.4241182044725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90759.59595959596,
            "unit": "ns",
            "range": "± 10184.721642594182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111646.39175257731,
            "unit": "ns",
            "range": "± 12519.110906394188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7906.122448979592,
            "unit": "ns",
            "range": "± 1351.9604952541924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20398.936170212764,
            "unit": "ns",
            "range": "± 1783.059149710357"
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
          "id": "02d952425f3d96a08ff88962bd1b44837d803de6",
          "message": "Changelog",
          "timestamp": "2023-04-27T14:37:14+09:00",
          "tree_id": "410ed249ccab831d6b47f5153120ca037b791f0b",
          "url": "https://github.com/greymistcube/libplanet/commit/02d952425f3d96a08ff88962bd1b44837d803de6"
        },
        "date": 1682574799485,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1499609,
            "unit": "ns",
            "range": "± 145828.9187868629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2600477.049180328,
            "unit": "ns",
            "range": "± 117105.69640776466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350603,
            "unit": "ns",
            "range": "± 217097.03246719105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5617919.354838709,
            "unit": "ns",
            "range": "± 317175.4360444926"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56739.17525773196,
            "unit": "ns",
            "range": "± 5655.520103938108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7718800,
            "unit": "ns",
            "range": "± 138705.05707126492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20613163.333333332,
            "unit": "ns",
            "range": "± 208386.56683696105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51803800,
            "unit": "ns",
            "range": "± 372352.24224877753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102461184.61538461,
            "unit": "ns",
            "range": "± 855987.6311860994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203774416.66666666,
            "unit": "ns",
            "range": "± 1112665.3088524912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862076.5625,
            "unit": "ns",
            "range": "± 17681.799011477924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532023.046875,
            "unit": "ns",
            "range": "± 7882.296460805868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178179.3098958333,
            "unit": "ns",
            "range": "± 7702.803990647758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670550.0520833335,
            "unit": "ns",
            "range": "± 13738.65232197273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832533.5481770834,
            "unit": "ns",
            "range": "± 6332.742587766264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765899.8046875,
            "unit": "ns",
            "range": "± 1120.5439904330149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3296390.3225806453,
            "unit": "ns",
            "range": "± 98037.43963350162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3488543.2835820895,
            "unit": "ns",
            "range": "± 160292.04334199405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3990016.129032258,
            "unit": "ns",
            "range": "± 117398.9014621352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4390055,
            "unit": "ns",
            "range": "± 144059.90376157715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6605480.645161291,
            "unit": "ns",
            "range": "± 199348.07819382127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281038.8888888889,
            "unit": "ns",
            "range": "± 13694.375894593004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288434.0206185567,
            "unit": "ns",
            "range": "± 19958.33100172884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250502,
            "unit": "ns",
            "range": "± 22839.536781730938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4046485,
            "unit": "ns",
            "range": "± 89099.05944922674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3714900,
            "unit": "ns",
            "range": "± 71342.9370482227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24178.571428571428,
            "unit": "ns",
            "range": "± 3066.656394723571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103004.08163265306,
            "unit": "ns",
            "range": "± 8694.232219706042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96614,
            "unit": "ns",
            "range": "± 9930.83678206017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118473.95833333333,
            "unit": "ns",
            "range": "± 15646.047052760416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8777.551020408164,
            "unit": "ns",
            "range": "± 1367.6325101931045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24067.777777777777,
            "unit": "ns",
            "range": "± 2188.572351745874"
          }
        ]
      }
    ]
  }
}