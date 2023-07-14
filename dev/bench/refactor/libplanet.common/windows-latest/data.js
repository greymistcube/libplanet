window.BENCHMARK_DATA = {
  "lastUpdate": 1689315471854,
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
          "id": "ba9389cb4ed6646f6d800bba871490927b0b4eae",
          "message": "Proofreading",
          "timestamp": "2023-07-13T22:14:15+09:00",
          "tree_id": "69062a506833fe2795b227937298e6db95638349",
          "url": "https://github.com/greymistcube/libplanet/commit/ba9389cb4ed6646f6d800bba871490927b0b4eae"
        },
        "date": 1689256158676,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1627280.8510638298,
            "unit": "ns",
            "range": "± 160159.26970483534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3090084.2696629213,
            "unit": "ns",
            "range": "± 169881.18234042582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057381.3333333333,
            "unit": "ns",
            "range": "± 99127.85586811112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5986415.555555556,
            "unit": "ns",
            "range": "± 398866.94520858076"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57634.444444444445,
            "unit": "ns",
            "range": "± 5456.738152131165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8839086.419753086,
            "unit": "ns",
            "range": "± 465730.36854844633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24214906.666666668,
            "unit": "ns",
            "range": "± 904410.461269962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62512281.81818182,
            "unit": "ns",
            "range": "± 2767483.230213056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125978568.75,
            "unit": "ns",
            "range": "± 3816707.2305205786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248748342.10526314,
            "unit": "ns",
            "range": "± 8156664.497592587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6001150.911458333,
            "unit": "ns",
            "range": "± 150689.97244261336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907239.1575168918,
            "unit": "ns",
            "range": "± 64489.80771536469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1464756.93359375,
            "unit": "ns",
            "range": "± 20921.478666648643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3313238.6160714286,
            "unit": "ns",
            "range": "± 43746.12395472142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010994.28125,
            "unit": "ns",
            "range": "± 26503.02147533527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 965275.7215711805,
            "unit": "ns",
            "range": "± 20288.24061152889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3903070,
            "unit": "ns",
            "range": "± 173874.82533149523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4086972.727272727,
            "unit": "ns",
            "range": "± 129358.1469040684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4934232.8125,
            "unit": "ns",
            "range": "± 227468.98553965654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4309009.302325581,
            "unit": "ns",
            "range": "± 234134.7282469481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7535336.559139785,
            "unit": "ns",
            "range": "± 486089.5155495151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313230.76923076925,
            "unit": "ns",
            "range": "± 13905.146563828032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301349.1525423729,
            "unit": "ns",
            "range": "± 13178.958842260068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294433.3333333333,
            "unit": "ns",
            "range": "± 18506.76335438135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5099007.692307692,
            "unit": "ns",
            "range": "± 77976.81772529642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4561100,
            "unit": "ns",
            "range": "± 100231.79451441018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25111.702127659573,
            "unit": "ns",
            "range": "± 2388.856584495132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112184.375,
            "unit": "ns",
            "range": "± 11902.09913484968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95304.25531914894,
            "unit": "ns",
            "range": "± 8736.561599352028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111101.03092783505,
            "unit": "ns",
            "range": "± 17373.75591976157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6375.531914893617,
            "unit": "ns",
            "range": "± 1196.7416489114535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23586.458333333332,
            "unit": "ns",
            "range": "± 2906.8564967989823"
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
          "id": "1844030a8e097ad9d115e9e04a10bbceeaeb4c0c",
          "message": "Proofreading",
          "timestamp": "2023-07-14T10:00:49+09:00",
          "tree_id": "a76e0f82e18aae27326d5c517b3130d496eaa31a",
          "url": "https://github.com/greymistcube/libplanet/commit/1844030a8e097ad9d115e9e04a10bbceeaeb4c0c"
        },
        "date": 1689297493425,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1644040,
            "unit": "ns",
            "range": "± 138189.2299587625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3066059.7560975607,
            "unit": "ns",
            "range": "± 161597.58880042925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107125,
            "unit": "ns",
            "range": "± 190660.47695755985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5929757.894736842,
            "unit": "ns",
            "range": "± 354308.12187919614"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55911.95652173913,
            "unit": "ns",
            "range": "± 4109.058403712685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8903087.5,
            "unit": "ns",
            "range": "± 314128.082800386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24025360,
            "unit": "ns",
            "range": "± 342705.6125264698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61582353.333333336,
            "unit": "ns",
            "range": "± 658721.7577211475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122978521.42857143,
            "unit": "ns",
            "range": "± 1455787.581281413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250265840,
            "unit": "ns",
            "range": "± 4365850.488540087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5816232.213541667,
            "unit": "ns",
            "range": "± 70332.43402973756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1922110.1143973214,
            "unit": "ns",
            "range": "± 18581.368588262645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1456504.5572916667,
            "unit": "ns",
            "range": "± 9997.111445994493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3280454.2708333335,
            "unit": "ns",
            "range": "± 47108.84190663809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021483.125,
            "unit": "ns",
            "range": "± 14731.578053153911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933357.3697916666,
            "unit": "ns",
            "range": "± 12334.480245700532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3894079.411764706,
            "unit": "ns",
            "range": "± 124080.57933996143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4095062.5,
            "unit": "ns",
            "range": "± 144411.7007964489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4939021.568627451,
            "unit": "ns",
            "range": "± 201447.0841821499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4659379.62962963,
            "unit": "ns",
            "range": "± 194421.7479775673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7387410.714285715,
            "unit": "ns",
            "range": "± 205229.97640278016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319197.56097560975,
            "unit": "ns",
            "range": "± 11330.412344766586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298089.1891891892,
            "unit": "ns",
            "range": "± 9098.833374052345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278902.0408163265,
            "unit": "ns",
            "range": "± 17263.85282458213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5051828.571428572,
            "unit": "ns",
            "range": "± 87327.92688016138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4399758.695652174,
            "unit": "ns",
            "range": "± 109133.591666542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22902.17391304348,
            "unit": "ns",
            "range": "± 1974.6179633767172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104169.07216494845,
            "unit": "ns",
            "range": "± 8633.297468049002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90368.75,
            "unit": "ns",
            "range": "± 7346.56830019797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108070.52631578948,
            "unit": "ns",
            "range": "± 13601.868407984612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6464.210526315789,
            "unit": "ns",
            "range": "± 997.0078415229395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22136.17021276596,
            "unit": "ns",
            "range": "± 2407.9997081337033"
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
          "id": "56bd59f162f0e48716f3775e65b08f0ec6d12616",
          "message": "Proofreading",
          "timestamp": "2023-07-14T14:57:15+09:00",
          "tree_id": "8f00b61403e014777f838a3d1f73817155e3ea78",
          "url": "https://github.com/greymistcube/libplanet/commit/56bd59f162f0e48716f3775e65b08f0ec6d12616"
        },
        "date": 1689315450996,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1667077.3195876288,
            "unit": "ns",
            "range": "± 195713.9715168726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3071501.030927835,
            "unit": "ns",
            "range": "± 341592.7684803833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154435.4166666665,
            "unit": "ns",
            "range": "± 218331.40718649497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6215642.857142857,
            "unit": "ns",
            "range": "± 494003.0737831663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63400,
            "unit": "ns",
            "range": "± 10981.580322657515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7820098.979591837,
            "unit": "ns",
            "range": "± 669286.3992150191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21938682.291666668,
            "unit": "ns",
            "range": "± 1375732.8220563447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57687212.5,
            "unit": "ns",
            "range": "± 2263060.893646272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117595101.85185185,
            "unit": "ns",
            "range": "± 4908169.016845389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220757440.54054055,
            "unit": "ns",
            "range": "± 10942028.696203435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4984762.199519231,
            "unit": "ns",
            "range": "± 171478.17027907798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1669384.8090277778,
            "unit": "ns",
            "range": "± 46590.18818977754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1237627.4373372395,
            "unit": "ns",
            "range": "± 48676.06957493579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2743524.4140625,
            "unit": "ns",
            "range": "± 57767.93815307003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867758.4893588362,
            "unit": "ns",
            "range": "± 25253.88525036301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808761.376953125,
            "unit": "ns",
            "range": "± 12431.949644548975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3142069.7916666665,
            "unit": "ns",
            "range": "± 343537.4592674809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3475260,
            "unit": "ns",
            "range": "± 391413.0376501953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4669089.69072165,
            "unit": "ns",
            "range": "± 471275.7122703705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4084113.5416666665,
            "unit": "ns",
            "range": "± 454761.9735109072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7206360,
            "unit": "ns",
            "range": "± 536984.1347155148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285201.0989010989,
            "unit": "ns",
            "range": "± 25878.43587281587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293087.0967741936,
            "unit": "ns",
            "range": "± 49337.59089350954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243655.7894736842,
            "unit": "ns",
            "range": "± 31977.02205537087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4061058.3333333335,
            "unit": "ns",
            "range": "± 393284.0860635949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3932487.6288659796,
            "unit": "ns",
            "range": "± 352242.91075718496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28490.721649484534,
            "unit": "ns",
            "range": "± 7929.560760142853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94681.63265306123,
            "unit": "ns",
            "range": "± 15594.04688776752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82626.31578947368,
            "unit": "ns",
            "range": "± 16933.067300317696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110444.32989690722,
            "unit": "ns",
            "range": "± 26326.57073927469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4854.117647058823,
            "unit": "ns",
            "range": "± 1056.8994344618727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21951.515151515152,
            "unit": "ns",
            "range": "± 9318.561284639622"
          }
        ]
      }
    ]
  }
}