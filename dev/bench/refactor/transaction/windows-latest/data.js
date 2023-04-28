window.BENCHMARK_DATA = {
  "lastUpdate": 1682673055259,
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
          "id": "b2b216263f442f9fca4808241970d8cb5b817e86",
          "message": "Changelog",
          "timestamp": "2023-04-27T14:38:58+09:00",
          "tree_id": "d0ab92b60b7e688c2dc495c16f76f9c9f033b744",
          "url": "https://github.com/greymistcube/libplanet/commit/b2b216263f442f9fca4808241970d8cb5b817e86"
        },
        "date": 1682574909779,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1498062.2448979593,
            "unit": "ns",
            "range": "± 121260.31852389606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2711348.9795918367,
            "unit": "ns",
            "range": "± 188116.61125997812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350258.3333333335,
            "unit": "ns",
            "range": "± 199449.47001112666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5445670.731707317,
            "unit": "ns",
            "range": "± 195505.13451557024"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59015.625,
            "unit": "ns",
            "range": "± 7195.558983077504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7748633.333333333,
            "unit": "ns",
            "range": "± 95940.75304706595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20508940,
            "unit": "ns",
            "range": "± 247210.2887364174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51230100,
            "unit": "ns",
            "range": "± 911560.3075418073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102793038.46153846,
            "unit": "ns",
            "range": "± 1561517.1749180674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204370207.69230768,
            "unit": "ns",
            "range": "± 2660457.567306026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4869948.016826923,
            "unit": "ns",
            "range": "± 40189.578732930335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543896.8524639423,
            "unit": "ns",
            "range": "± 8906.17079333985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1183772.3214285714,
            "unit": "ns",
            "range": "± 8437.318613800295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649284.5145089286,
            "unit": "ns",
            "range": "± 24753.51556814965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847153.3854166666,
            "unit": "ns",
            "range": "± 7380.0702832644065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774420.7747395834,
            "unit": "ns",
            "range": "± 9507.94796100579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3357903.4482758623,
            "unit": "ns",
            "range": "± 96770.87254643835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3505190,
            "unit": "ns",
            "range": "± 80592.36218218984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4057472.340425532,
            "unit": "ns",
            "range": "± 157494.80005512352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4423700,
            "unit": "ns",
            "range": "± 124680.42407751165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6685623.076923077,
            "unit": "ns",
            "range": "± 167356.14552849214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291806.41025641025,
            "unit": "ns",
            "range": "± 14575.306815452248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271257.74647887325,
            "unit": "ns",
            "range": "± 13204.768207754467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243822,
            "unit": "ns",
            "range": "± 20902.88066755442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4071950,
            "unit": "ns",
            "range": "± 88602.7948947317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3813640,
            "unit": "ns",
            "range": "± 66984.66562259923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27871.717171717173,
            "unit": "ns",
            "range": "± 3599.575950196459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116344.44444444444,
            "unit": "ns",
            "range": "± 12588.213001691849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105844.44444444444,
            "unit": "ns",
            "range": "± 12771.166681736575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121586.73469387754,
            "unit": "ns",
            "range": "± 19413.878751988956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10263.636363636364,
            "unit": "ns",
            "range": "± 1452.7563208066883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26769.072164948455,
            "unit": "ns",
            "range": "± 3422.1813470097272"
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
          "id": "3b41d96394fdabaa4492532c4ed143bbca2f4384",
          "message": "Fix ts tests",
          "timestamp": "2023-04-28T17:23:49+09:00",
          "tree_id": "14bc447b7bce10597997c252b35de7100d185be3",
          "url": "https://github.com/greymistcube/libplanet/commit/3b41d96394fdabaa4492532c4ed143bbca2f4384"
        },
        "date": 1682671594583,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1777112.5,
            "unit": "ns",
            "range": "± 229052.86921306365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3293056.6666666665,
            "unit": "ns",
            "range": "± 226280.54864841836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2752072.9166666665,
            "unit": "ns",
            "range": "± 258246.14471231113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6655225.531914894,
            "unit": "ns",
            "range": "± 520743.4804770881"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67074.46808510639,
            "unit": "ns",
            "range": "± 7670.316141726119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9919204.761904761,
            "unit": "ns",
            "range": "± 233463.4542625258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25344232.58426966,
            "unit": "ns",
            "range": "± 1395783.3431751833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63854096.36363637,
            "unit": "ns",
            "range": "± 2700622.7698758147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126832232.87671232,
            "unit": "ns",
            "range": "± 6279331.9211842995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244162106.25,
            "unit": "ns",
            "range": "± 4505225.45280755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6207599.956597222,
            "unit": "ns",
            "range": "± 170509.08417659168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1974380.3046875,
            "unit": "ns",
            "range": "± 78794.67811546124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1543044.2853009258,
            "unit": "ns",
            "range": "± 42235.59339225853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3428653.5682091345,
            "unit": "ns",
            "range": "± 141004.8393206716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1064287.377232143,
            "unit": "ns",
            "range": "± 34550.77518318931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 980536.7808948864,
            "unit": "ns",
            "range": "± 30653.62743187804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3979612.5,
            "unit": "ns",
            "range": "± 73116.80951281541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4229642.857142857,
            "unit": "ns",
            "range": "± 63394.77913817526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5070361.538461538,
            "unit": "ns",
            "range": "± 208575.3662196597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5228259.550561798,
            "unit": "ns",
            "range": "± 288823.1083045551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8175118.181818182,
            "unit": "ns",
            "range": "± 196302.9258602599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336910,
            "unit": "ns",
            "range": "± 13534.219668707034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325437.5,
            "unit": "ns",
            "range": "± 11402.269744184661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289647.77777777775,
            "unit": "ns",
            "range": "± 17037.165110611633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4948228.846153846,
            "unit": "ns",
            "range": "± 203816.4084838853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4537381.25,
            "unit": "ns",
            "range": "± 208575.6646802915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28495.833333333332,
            "unit": "ns",
            "range": "± 2430.201060196966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116470.96774193548,
            "unit": "ns",
            "range": "± 8550.318842836534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115793.75,
            "unit": "ns",
            "range": "± 10442.250337224403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127754.02298850575,
            "unit": "ns",
            "range": "± 11385.249582067887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11236.734693877552,
            "unit": "ns",
            "range": "± 1520.538954578992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30240.20618556701,
            "unit": "ns",
            "range": "± 2906.625326797042"
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
          "id": "979e41c7df359212c0377fbd0c31f1b964e4b4ba",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:33:10+09:00",
          "tree_id": "8610bb5a528524d6c08047e0f2796178a8391232",
          "url": "https://github.com/greymistcube/libplanet/commit/979e41c7df359212c0377fbd0c31f1b964e4b4ba"
        },
        "date": 1682672021917,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1751943.75,
            "unit": "ns",
            "range": "± 229591.9606205299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3163680.2197802197,
            "unit": "ns",
            "range": "± 222220.56871484953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2639408.695652174,
            "unit": "ns",
            "range": "± 180400.5790859434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6928997.777777778,
            "unit": "ns",
            "range": "± 606611.0237642485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61268.75,
            "unit": "ns",
            "range": "± 9208.363618272022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9040086.597938145,
            "unit": "ns",
            "range": "± 589064.8117335481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23721526.229508195,
            "unit": "ns",
            "range": "± 1062784.8060483427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59860830,
            "unit": "ns",
            "range": "± 1932851.4823759939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122421547.82608695,
            "unit": "ns",
            "range": "± 3079254.0021702372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248275720,
            "unit": "ns",
            "range": "± 5592470.341224322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6462721.033653846,
            "unit": "ns",
            "range": "± 90303.04862612579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946102.4169921875,
            "unit": "ns",
            "range": "± 36613.02193576674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451732.7026367188,
            "unit": "ns",
            "range": "± 26948.91597013461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3754807.4869791665,
            "unit": "ns",
            "range": "± 183724.36623214406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1035751.8098958334,
            "unit": "ns",
            "range": "± 16746.51720215752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 964673.984375,
            "unit": "ns",
            "range": "± 9709.074628718568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3860600,
            "unit": "ns",
            "range": "± 266721.68664171273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4039750,
            "unit": "ns",
            "range": "± 232035.35302326578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5074176.470588235,
            "unit": "ns",
            "range": "± 203965.87909573043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4933030.337078651,
            "unit": "ns",
            "range": "± 277703.6928112794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8472220.212765958,
            "unit": "ns",
            "range": "± 525603.0414368777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327938.82352941175,
            "unit": "ns",
            "range": "± 18221.788985649433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315943.4065934066,
            "unit": "ns",
            "range": "± 19875.51146622285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271551.0869565217,
            "unit": "ns",
            "range": "± 22818.695316524987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4868942.307692308,
            "unit": "ns",
            "range": "± 130215.28688468777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4541088.29787234,
            "unit": "ns",
            "range": "± 268361.7726957091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25412.08791208791,
            "unit": "ns",
            "range": "± 3577.237766298186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121196.7032967033,
            "unit": "ns",
            "range": "± 14843.041396556097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123195.74468085106,
            "unit": "ns",
            "range": "± 17393.538936953442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133429.67032967033,
            "unit": "ns",
            "range": "± 14815.993569304266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10441.836734693878,
            "unit": "ns",
            "range": "± 2135.508508909843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27729.166666666668,
            "unit": "ns",
            "range": "± 4489.682128395628"
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
          "id": "f968d0d2810ed3d7da353c446b7a06b2c8d87765",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:44:43+09:00",
          "tree_id": "127ee6961fcd950dd8c6c5f5f420c747bde944c0",
          "url": "https://github.com/greymistcube/libplanet/commit/f968d0d2810ed3d7da353c446b7a06b2c8d87765"
        },
        "date": 1682672349597,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1313370,
            "unit": "ns",
            "range": "± 112976.44744267575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2440047.272727273,
            "unit": "ns",
            "range": "± 103280.07562062502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050442.105263158,
            "unit": "ns",
            "range": "± 136259.63060162365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4712392.307692308,
            "unit": "ns",
            "range": "± 128728.39989086144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47363.85542168675,
            "unit": "ns",
            "range": "± 2528.9821684050066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6999920,
            "unit": "ns",
            "range": "± 57780.671508732055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18902030.769230768,
            "unit": "ns",
            "range": "± 227417.2757459123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47034040,
            "unit": "ns",
            "range": "± 752662.2376604263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93244306.66666667,
            "unit": "ns",
            "range": "± 1251491.3306398357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182746893.33333334,
            "unit": "ns",
            "range": "± 2113142.979229438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4700368.75,
            "unit": "ns",
            "range": "± 21318.196957574415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530767.8255208333,
            "unit": "ns",
            "range": "± 5203.695301284934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163944.9739583333,
            "unit": "ns",
            "range": "± 6590.765210466661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647499.2745535714,
            "unit": "ns",
            "range": "± 5754.507338964344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811861.0281808035,
            "unit": "ns",
            "range": "± 2718.390809867238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752043.6328125,
            "unit": "ns",
            "range": "± 3242.199247765063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2952153.3333333335,
            "unit": "ns",
            "range": "± 44461.89165480715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3156853.5714285714,
            "unit": "ns",
            "range": "± 135888.8970837918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3791235.714285714,
            "unit": "ns",
            "range": "± 52392.183902428944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3904313.5135135134,
            "unit": "ns",
            "range": "± 194116.6443036385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6209435.483870967,
            "unit": "ns",
            "range": "± 175370.30829720883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259066.17647058822,
            "unit": "ns",
            "range": "± 12387.760091630622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244156.0975609756,
            "unit": "ns",
            "range": "± 8739.766838437048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203900,
            "unit": "ns",
            "range": "± 3971.39773883201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3821462.5,
            "unit": "ns",
            "range": "± 73657.8203587372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3435088.2352941176,
            "unit": "ns",
            "range": "± 68268.9889550239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18582.417582417584,
            "unit": "ns",
            "range": "± 1762.8634160613306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82671.27659574468,
            "unit": "ns",
            "range": "± 5798.472589767504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70932.85714285714,
            "unit": "ns",
            "range": "± 3464.1736337549987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91453.09278350516,
            "unit": "ns",
            "range": "± 14753.900992677096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6575.789473684211,
            "unit": "ns",
            "range": "± 757.3351642118881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17111.827956989247,
            "unit": "ns",
            "range": "± 1294.1212783672768"
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
          "id": "accd7994dff96146b8932106afcf5eff0a4d3fc1",
          "message": "Fixed ts tests",
          "timestamp": "2023-04-28T17:50:03+09:00",
          "tree_id": "9f67cb987aa229965a42d7cbc3c169fd5e49dd8d",
          "url": "https://github.com/greymistcube/libplanet/commit/accd7994dff96146b8932106afcf5eff0a4d3fc1"
        },
        "date": 1682673029240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707951.0204081633,
            "unit": "ns",
            "range": "± 249484.27857618599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3356835.0515463916,
            "unit": "ns",
            "range": "± 338638.62376963306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2648895.9183673467,
            "unit": "ns",
            "range": "± 279119.1926301535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6901520.4301075265,
            "unit": "ns",
            "range": "± 612664.1454512841"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56346.31578947369,
            "unit": "ns",
            "range": "± 10446.783181218338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8886790.52631579,
            "unit": "ns",
            "range": "± 623803.0521631149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23885680.208333332,
            "unit": "ns",
            "range": "± 2053483.8206336491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60391310.98901099,
            "unit": "ns",
            "range": "± 3374484.3270721645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134530291.42857143,
            "unit": "ns",
            "range": "± 4418339.660229809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251991689.6226415,
            "unit": "ns",
            "range": "± 10426526.98880157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6098247.802734375,
            "unit": "ns",
            "range": "± 116163.74759356721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2025285.7935855263,
            "unit": "ns",
            "range": "± 43815.75627111365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1473222.3714192708,
            "unit": "ns",
            "range": "± 56941.579405800636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3305545.5193014704,
            "unit": "ns",
            "range": "± 67220.36526849993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1065131.1783854167,
            "unit": "ns",
            "range": "± 18008.806271674504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946977.3958333334,
            "unit": "ns",
            "range": "± 15106.514044587193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3637315.463917526,
            "unit": "ns",
            "range": "± 391178.47917654715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3768943.2989690723,
            "unit": "ns",
            "range": "± 358395.77805921494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4989863.157894737,
            "unit": "ns",
            "range": "± 392538.7667676321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4985416.666666667,
            "unit": "ns",
            "range": "± 460339.3573547937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8279472.164948453,
            "unit": "ns",
            "range": "± 823209.1800465861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340290.42553191487,
            "unit": "ns",
            "range": "± 35587.046299645386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315573.62637362635,
            "unit": "ns",
            "range": "± 40734.15120609578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293963.44086021505,
            "unit": "ns",
            "range": "± 36130.674023924534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5199044.680851064,
            "unit": "ns",
            "range": "± 365049.6718645172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5046568.75,
            "unit": "ns",
            "range": "± 196594.17986260698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23430.68181818182,
            "unit": "ns",
            "range": "± 2985.1108666350074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109708.60215053764,
            "unit": "ns",
            "range": "± 15358.531518868665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88097.77777777778,
            "unit": "ns",
            "range": "± 13954.105978454068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118671.875,
            "unit": "ns",
            "range": "± 25304.61868856522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6086.516853932584,
            "unit": "ns",
            "range": "± 677.259016389519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22468.13186813187,
            "unit": "ns",
            "range": "± 6117.695265391645"
          }
        ]
      }
    ]
  }
}