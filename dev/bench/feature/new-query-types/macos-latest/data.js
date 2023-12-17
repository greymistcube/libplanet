window.BENCHMARK_DATA = {
  "lastUpdate": 1702797236050,
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
          "id": "5e119e4c89abc2575593bef0141eab83e735888b",
          "message": "Updated PublicKeyType",
          "timestamp": "2023-12-12T23:19:39+09:00",
          "tree_id": "10154c1d6706819011527e83383a4d02d77757be",
          "url": "https://github.com/greymistcube/libplanet/commit/5e119e4c89abc2575593bef0141eab83e735888b"
        },
        "date": 1702391925315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11740302.469696969,
            "unit": "ns",
            "range": "± 1824019.5285239862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27069164.57731959,
            "unit": "ns",
            "range": "± 4377716.241379517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69042381.67777778,
            "unit": "ns",
            "range": "± 9185025.549784966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119506604.97,
            "unit": "ns",
            "range": "± 15409276.698254215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217730533.7820513,
            "unit": "ns",
            "range": "± 7619152.961532345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73117.74742268042,
            "unit": "ns",
            "range": "± 21756.008910390196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257698.74210526317,
            "unit": "ns",
            "range": "± 30213.360817837638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255485.83695652173,
            "unit": "ns",
            "range": "± 27705.323492215164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234163.22631578948,
            "unit": "ns",
            "range": "± 23832.262444025237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3738264.1764705884,
            "unit": "ns",
            "range": "± 74334.69697106064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3568891.375,
            "unit": "ns",
            "range": "± 164988.87227638034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12186.5,
            "unit": "ns",
            "range": "± 626.2408654995469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57405.01098901099,
            "unit": "ns",
            "range": "± 6345.1783960465345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53266.2,
            "unit": "ns",
            "range": "± 7059.924055357517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59134.054945054944,
            "unit": "ns",
            "range": "± 9971.662966585347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3205.9444444444443,
            "unit": "ns",
            "range": "± 356.7865745796073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12828.92857142857,
            "unit": "ns",
            "range": "± 1075.1996932564005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420420.8936170214,
            "unit": "ns",
            "range": "± 443008.24699414114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3042277.6052631577,
            "unit": "ns",
            "range": "± 629393.846513478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119979.9375,
            "unit": "ns",
            "range": "± 572595.5211452278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7877766.455555555,
            "unit": "ns",
            "range": "± 1010953.8764124992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3112261.0833333335,
            "unit": "ns",
            "range": "± 122674.85132898533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3314323.575,
            "unit": "ns",
            "range": "± 166132.10044067263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3975464.272727273,
            "unit": "ns",
            "range": "± 168821.11837390732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3820862.7527472526,
            "unit": "ns",
            "range": "± 224628.26142305986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15589008.036082475,
            "unit": "ns",
            "range": "± 2076754.5351902302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4312737.045052083,
            "unit": "ns",
            "range": "± 48566.790207232356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1316656.2359375,
            "unit": "ns",
            "range": "± 18035.312241911488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 852258.2416015625,
            "unit": "ns",
            "range": "± 14928.363946261348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2054432.5791519007,
            "unit": "ns",
            "range": "± 124058.61077620886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626779.9792829241,
            "unit": "ns",
            "range": "± 7370.4721920313505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570972.8350911458,
            "unit": "ns",
            "range": "± 3851.8081616148447"
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
          "id": "65bb38b9639f64f14feed57d2591029fec102d2d",
          "message": "Changelog",
          "timestamp": "2023-12-12T23:22:30+09:00",
          "tree_id": "0fa6d0e6cbcf60bfa543a2fe18cb6a1cea6ff2c1",
          "url": "https://github.com/greymistcube/libplanet/commit/65bb38b9639f64f14feed57d2591029fec102d2d"
        },
        "date": 1702392031179,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8321674.75,
            "unit": "ns",
            "range": "± 74010.14061246792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20277088.5,
            "unit": "ns",
            "range": "± 515246.3140752071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50031956.03125,
            "unit": "ns",
            "range": "± 1554276.1880017307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100317015.03333333,
            "unit": "ns",
            "range": "± 1786792.3731317231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202271550.92,
            "unit": "ns",
            "range": "± 5233566.210831314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67203.71134020618,
            "unit": "ns",
            "range": "± 11272.000045243709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323012.5104166667,
            "unit": "ns",
            "range": "± 31916.214400898192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313643.65625,
            "unit": "ns",
            "range": "± 37146.86745249488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302801.656626506,
            "unit": "ns",
            "range": "± 16069.336079506973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4307995.708333333,
            "unit": "ns",
            "range": "± 251687.21639597858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3991637.101010101,
            "unit": "ns",
            "range": "± 246624.75403413552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26361.415730337078,
            "unit": "ns",
            "range": "± 3328.29221089636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114018.28260869565,
            "unit": "ns",
            "range": "± 13955.887322675353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118861.70224719102,
            "unit": "ns",
            "range": "± 13114.082917871652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129685.60638297872,
            "unit": "ns",
            "range": "± 25826.021743194575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9217.443181818182,
            "unit": "ns",
            "range": "± 991.4266610903672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30489.293478260868,
            "unit": "ns",
            "range": "± 8511.032387292356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1471939.9680851065,
            "unit": "ns",
            "range": "± 185053.52871050214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2813227.98989899,
            "unit": "ns",
            "range": "± 187722.90143336565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217823.948979592,
            "unit": "ns",
            "range": "± 221241.88121160268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9771785.25,
            "unit": "ns",
            "range": "± 614451.1938785971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3201466.5476190476,
            "unit": "ns",
            "range": "± 116655.43314879003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3349935.96,
            "unit": "ns",
            "range": "± 76405.16018430954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4275851.224137931,
            "unit": "ns",
            "range": "± 187522.36176343035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4088605.714285714,
            "unit": "ns",
            "range": "± 168463.14550641895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20802156.489361703,
            "unit": "ns",
            "range": "± 3494122.4151071715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6783898.296316965,
            "unit": "ns",
            "range": "± 112499.16379773471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2028891.3584558824,
            "unit": "ns",
            "range": "± 64973.218092991985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1213397.283482143,
            "unit": "ns",
            "range": "± 28082.363511115644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3161009.2183314734,
            "unit": "ns",
            "range": "± 86055.95256142628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893719.896484375,
            "unit": "ns",
            "range": "± 8031.819064024625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781994.778515625,
            "unit": "ns",
            "range": "± 20568.50947999722"
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
          "id": "badb04bc394e7a1c7d2152c6cf91dc81df973192",
          "message": "Fixed broken changelog due to reverting",
          "timestamp": "2023-12-17T15:53:14+09:00",
          "tree_id": "971b4e69b096d781d447d43150eecda2f505b388",
          "url": "https://github.com/greymistcube/libplanet/commit/badb04bc394e7a1c7d2152c6cf91dc81df973192"
        },
        "date": 1702796911920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8446604.214285715,
            "unit": "ns",
            "range": "± 111752.55338000358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21355470.222222224,
            "unit": "ns",
            "range": "± 590702.3707299207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51062063.62903226,
            "unit": "ns",
            "range": "± 1545275.9327432269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102917706,
            "unit": "ns",
            "range": "± 2061057.2825515429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214552995.05,
            "unit": "ns",
            "range": "± 4862840.002858775"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51022.70224719101,
            "unit": "ns",
            "range": "± 5160.455756783713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248326.44086021505,
            "unit": "ns",
            "range": "± 21288.54675664949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239913.27011494254,
            "unit": "ns",
            "range": "± 15253.64524386247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238132.46268656716,
            "unit": "ns",
            "range": "± 11326.322140133198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4042588.925531915,
            "unit": "ns",
            "range": "± 156981.3134830336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3711953.0588235296,
            "unit": "ns",
            "range": "± 119320.11158966104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19569.956521739132,
            "unit": "ns",
            "range": "± 2667.7278738802947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82183.93956043955,
            "unit": "ns",
            "range": "± 8424.568975731758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84728.91954022988,
            "unit": "ns",
            "range": "± 6654.514493530969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86915.09574468085,
            "unit": "ns",
            "range": "± 13962.510858146277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6727.433333333333,
            "unit": "ns",
            "range": "± 946.0097043234584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18932.97894736842,
            "unit": "ns",
            "range": "± 2201.806922270054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1138824.9468085107,
            "unit": "ns",
            "range": "± 105082.28060594517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2486929.075268817,
            "unit": "ns",
            "range": "± 176436.73074007084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1682911.670212766,
            "unit": "ns",
            "range": "± 126811.53657150689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7705839.065934066,
            "unit": "ns",
            "range": "± 832121.1280112183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3021038.285714286,
            "unit": "ns",
            "range": "± 110428.12916245034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3260790.8105263156,
            "unit": "ns",
            "range": "± 215509.86294363652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3923836.3448275863,
            "unit": "ns",
            "range": "± 226383.90034700252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3684312.878787879,
            "unit": "ns",
            "range": "± 173056.72812102488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15476561.89,
            "unit": "ns",
            "range": "± 2442892.3170653693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4965022.223858173,
            "unit": "ns",
            "range": "± 76081.8559745765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1452825.1872395833,
            "unit": "ns",
            "range": "± 19361.275659869756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 954628.4215877757,
            "unit": "ns",
            "range": "± 18035.128747908642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2245901.494014617,
            "unit": "ns",
            "range": "± 68412.87242622227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 674451.5138549805,
            "unit": "ns",
            "range": "± 12463.917227983853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 601689.4813151042,
            "unit": "ns",
            "range": "± 9154.610055732921"
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
          "id": "58ea35e612a35ec1856f95fef54cd68e2bb427b2",
          "message": "Changelog",
          "timestamp": "2023-12-17T15:51:31+09:00",
          "tree_id": "ced10db146ba60c319cd2347c1b6826f3177683c",
          "url": "https://github.com/greymistcube/libplanet/commit/58ea35e612a35ec1856f95fef54cd68e2bb427b2"
        },
        "date": 1702797223445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9164535.95,
            "unit": "ns",
            "range": "± 714954.1982518792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22792775.59090909,
            "unit": "ns",
            "range": "± 1653133.2488149619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58075484.8,
            "unit": "ns",
            "range": "± 3740808.9490886014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111409963.73469388,
            "unit": "ns",
            "range": "± 11551672.616069095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209604770.5,
            "unit": "ns",
            "range": "± 6637528.431144889"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76266.75555555556,
            "unit": "ns",
            "range": "± 10506.282318091433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376974.3958333333,
            "unit": "ns",
            "range": "± 59340.32451377025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328540.1612903226,
            "unit": "ns",
            "range": "± 45422.68477727705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289238.847826087,
            "unit": "ns",
            "range": "± 20470.583184429663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4064893.1403508773,
            "unit": "ns",
            "range": "± 174291.26013950232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3745689.802325581,
            "unit": "ns",
            "range": "± 198036.16109802478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20936.652173913044,
            "unit": "ns",
            "range": "± 3475.4875725138936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101243.89247311828,
            "unit": "ns",
            "range": "± 12078.430693184087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79142.58695652174,
            "unit": "ns",
            "range": "± 9522.771922096399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95155.11578947368,
            "unit": "ns",
            "range": "± 14066.406185512058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6804.284946236559,
            "unit": "ns",
            "range": "± 1335.2951460865218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21895.816091954024,
            "unit": "ns",
            "range": "± 4068.6803515383035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1535371.4540229884,
            "unit": "ns",
            "range": "± 199936.72950762988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3042001.569767442,
            "unit": "ns",
            "range": "± 286594.6748497848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2585791.3666666667,
            "unit": "ns",
            "range": "± 456089.9704929163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12320808.347368421,
            "unit": "ns",
            "range": "± 2974580.208051967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228854.292307692,
            "unit": "ns",
            "range": "± 150067.96908898096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3687870.2268041237,
            "unit": "ns",
            "range": "± 533272.018423886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4217403.027777778,
            "unit": "ns",
            "range": "± 137756.0026615353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4058096.144927536,
            "unit": "ns",
            "range": "± 194959.6707953359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20310767.46,
            "unit": "ns",
            "range": "± 3731129.3795878673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5661446.620392628,
            "unit": "ns",
            "range": "± 180913.8952675096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1794808.068359375,
            "unit": "ns",
            "range": "± 19969.305309318745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1109351.4010416667,
            "unit": "ns",
            "range": "± 26009.86398290159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641529.9294084823,
            "unit": "ns",
            "range": "± 46486.682494823166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882296.343858507,
            "unit": "ns",
            "range": "± 16978.57002675412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 803435.4404296875,
            "unit": "ns",
            "range": "± 13321.462219962652"
          }
        ]
      }
    ]
  }
}