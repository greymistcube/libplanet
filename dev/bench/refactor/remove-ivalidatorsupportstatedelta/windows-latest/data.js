window.BENCHMARK_DATA = {
  "lastUpdate": 1687765884889,
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
          "id": "c341e18640c1f491a1d2a900f7f05d818ccd5940",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T15:14:05+09:00",
          "tree_id": "982f1fe962e5e5d45c8dd58eddd405b285026528",
          "url": "https://github.com/greymistcube/libplanet/commit/c341e18640c1f491a1d2a900f7f05d818ccd5940"
        },
        "date": 1687761034925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1452597,
            "unit": "ns",
            "range": "± 181589.63640999768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2747511.290322581,
            "unit": "ns",
            "range": "± 124112.9748502413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2256997.0149253733,
            "unit": "ns",
            "range": "± 102396.251958735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5544256.470588235,
            "unit": "ns",
            "range": "± 299120.0835653749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49639.784946236556,
            "unit": "ns",
            "range": "± 2922.6677727328024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6897428.571428572,
            "unit": "ns",
            "range": "± 100219.83089935097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19854400,
            "unit": "ns",
            "range": "± 436132.23568087694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49814633.333333336,
            "unit": "ns",
            "range": "± 807014.2153701654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100589583.33333333,
            "unit": "ns",
            "range": "± 2141476.9192284644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200361010,
            "unit": "ns",
            "range": "± 2861600.527876464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4804190.572916667,
            "unit": "ns",
            "range": "± 21182.90439533456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526058.0729166667,
            "unit": "ns",
            "range": "± 8109.8423144535445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170093.2942708333,
            "unit": "ns",
            "range": "± 4834.00485637045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617666.5885416665,
            "unit": "ns",
            "range": "± 9086.189829961977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833497.4479166666,
            "unit": "ns",
            "range": "± 3421.2962312433774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752992.8292410715,
            "unit": "ns",
            "range": "± 2095.9601150635726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3231245.4545454546,
            "unit": "ns",
            "range": "± 121030.91754636154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3354621.875,
            "unit": "ns",
            "range": "± 153936.59122204667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4236445.454545454,
            "unit": "ns",
            "range": "± 102796.45851446869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4215445,
            "unit": "ns",
            "range": "± 187250.3105154584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6804089.743589744,
            "unit": "ns",
            "range": "± 233207.14396711977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272102.12765957444,
            "unit": "ns",
            "range": "± 10056.308626963475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259271.6049382716,
            "unit": "ns",
            "range": "± 13656.722104589202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248803,
            "unit": "ns",
            "range": "± 20365.555467380444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4087173.3333333335,
            "unit": "ns",
            "range": "± 63115.534273795594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3760806.25,
            "unit": "ns",
            "range": "± 70885.79988262811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22652.577319587628,
            "unit": "ns",
            "range": "± 2540.918993178828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97379,
            "unit": "ns",
            "range": "± 9524.46392881579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74144.68085106384,
            "unit": "ns",
            "range": "± 5535.173298591096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101603.2258064516,
            "unit": "ns",
            "range": "± 11969.712244669725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5744.791666666667,
            "unit": "ns",
            "range": "± 1142.1927011965481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19245.744680851065,
            "unit": "ns",
            "range": "± 2015.7799469005142"
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
          "id": "131fc3bc457b025d8d2de0762acb51fbcf6d85dc",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T15:17:18+09:00",
          "tree_id": "8836faf6bc4ad702d6ef67200d7e7920548019a0",
          "url": "https://github.com/greymistcube/libplanet/commit/131fc3bc457b025d8d2de0762acb51fbcf6d85dc"
        },
        "date": 1687761412800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1496196,
            "unit": "ns",
            "range": "± 128378.92690284988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2741383.0508474577,
            "unit": "ns",
            "range": "± 120741.23963730263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2315224.4680851065,
            "unit": "ns",
            "range": "± 152542.47685263827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5388833.333333333,
            "unit": "ns",
            "range": "± 129165.5044360989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51911.70212765958,
            "unit": "ns",
            "range": "± 4518.1558799447475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7533547.5,
            "unit": "ns",
            "range": "± 267234.37373663264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20402946.666666668,
            "unit": "ns",
            "range": "± 183040.91606081126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51536813.333333336,
            "unit": "ns",
            "range": "± 765623.1970163416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104151573.33333333,
            "unit": "ns",
            "range": "± 1650440.0925929106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206454526.66666666,
            "unit": "ns",
            "range": "± 1118017.626660604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4894764.947916667,
            "unit": "ns",
            "range": "± 14313.709359931077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536284.2838541667,
            "unit": "ns",
            "range": "± 7003.17927888935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187482.5520833333,
            "unit": "ns",
            "range": "± 4475.7136340888255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658142.606026786,
            "unit": "ns",
            "range": "± 6547.409888536405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825221.26953125,
            "unit": "ns",
            "range": "± 2879.1717895920706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762084.74609375,
            "unit": "ns",
            "range": "± 2241.9772774108924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315975,
            "unit": "ns",
            "range": "± 76061.15873703906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3616695.5555555555,
            "unit": "ns",
            "range": "± 130746.3261356884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4375050,
            "unit": "ns",
            "range": "± 133827.24781622208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4497193.333333333,
            "unit": "ns",
            "range": "± 82856.46337980835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6793881.25,
            "unit": "ns",
            "range": "± 133050.46270118718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280473.21428571426,
            "unit": "ns",
            "range": "± 11938.349072272455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275238.1443298969,
            "unit": "ns",
            "range": "± 15902.374320227109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268405.4347826087,
            "unit": "ns",
            "range": "± 15050.919902742717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4183886.6666666665,
            "unit": "ns",
            "range": "± 41658.06158762184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3795685.714285714,
            "unit": "ns",
            "range": "± 55392.03784970235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25076.041666666668,
            "unit": "ns",
            "range": "± 3144.6778695931275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103561.85567010309,
            "unit": "ns",
            "range": "± 9338.645548862278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89388.77551020408,
            "unit": "ns",
            "range": "± 9285.17977389888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113396.8085106383,
            "unit": "ns",
            "range": "± 14543.09651936408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7412.244897959184,
            "unit": "ns",
            "range": "± 1284.6649293274118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24341.666666666668,
            "unit": "ns",
            "range": "± 2520.5958638329803"
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
          "id": "75fd2d685cc94baf977cf4f6927618a9120bf02d",
          "message": "Changelog",
          "timestamp": "2023-06-26T15:25:34+09:00",
          "tree_id": "c8a226f50d6fddd075124060ea04066053d630db",
          "url": "https://github.com/greymistcube/libplanet/commit/75fd2d685cc94baf977cf4f6927618a9120bf02d"
        },
        "date": 1687761912027,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664748.4536082475,
            "unit": "ns",
            "range": "± 159744.81154420038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2999142.7083333335,
            "unit": "ns",
            "range": "± 289307.66276707157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2487483.3333333335,
            "unit": "ns",
            "range": "± 239517.18660914383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6749198.947368421,
            "unit": "ns",
            "range": "± 574045.8619262271"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60745.26315789474,
            "unit": "ns",
            "range": "± 14521.105464783765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8078909.89010989,
            "unit": "ns",
            "range": "± 459250.49326894095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23245225.25252525,
            "unit": "ns",
            "range": "± 1681557.9125118805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60021282.60869565,
            "unit": "ns",
            "range": "± 2899119.6265091826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121809422.09302326,
            "unit": "ns",
            "range": "± 6568246.4315631045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250747674.3243243,
            "unit": "ns",
            "range": "± 12558093.933647657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5722689.543269231,
            "unit": "ns",
            "range": "± 54874.495589190214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1892106.5892269737,
            "unit": "ns",
            "range": "± 39673.216759101306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371778.3984375,
            "unit": "ns",
            "range": "± 24296.484504507636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3113707.12890625,
            "unit": "ns",
            "range": "± 60541.67296327093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021689.8671875,
            "unit": "ns",
            "range": "± 27197.66839895692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920298.2259114584,
            "unit": "ns",
            "range": "± 22929.962279281026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3545612.765957447,
            "unit": "ns",
            "range": "± 259485.38286635632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3595498.936170213,
            "unit": "ns",
            "range": "± 333970.7290292346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4732370.103092783,
            "unit": "ns",
            "range": "± 373595.0916893372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4424726.530612245,
            "unit": "ns",
            "range": "± 458858.712515908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7979516.326530612,
            "unit": "ns",
            "range": "± 717720.2856559347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315039.6907216495,
            "unit": "ns",
            "range": "± 49210.19856301825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297732.2916666667,
            "unit": "ns",
            "range": "± 38520.336378242886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255361.61616161617,
            "unit": "ns",
            "range": "± 47554.74977258105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4411911.578947368,
            "unit": "ns",
            "range": "± 294007.41265194135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4042398.9583333335,
            "unit": "ns",
            "range": "± 251404.85465931625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26723.23232323232,
            "unit": "ns",
            "range": "± 10756.809217770668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107904.54545454546,
            "unit": "ns",
            "range": "± 29219.054003905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96147.91666666667,
            "unit": "ns",
            "range": "± 24552.873040876562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135689.69072164947,
            "unit": "ns",
            "range": "± 31534.731132700083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5075,
            "unit": "ns",
            "range": "± 1039.7955081626294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25991,
            "unit": "ns",
            "range": "± 11102.480339859634"
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
          "id": "935fc0e7f25595130a54cef3b10ea80534a7ba92",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T16:33:53+09:00",
          "tree_id": "23f8e71ce32558289c569cca9cfb9aefb2964af9",
          "url": "https://github.com/greymistcube/libplanet/commit/935fc0e7f25595130a54cef3b10ea80534a7ba92"
        },
        "date": 1687765863391,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1465914.1414141415,
            "unit": "ns",
            "range": "± 111552.67814831443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2739356.470588235,
            "unit": "ns",
            "range": "± 144717.54957178351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2284136.7346938774,
            "unit": "ns",
            "range": "± 136715.90257937746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5588092.307692308,
            "unit": "ns",
            "range": "± 259823.19066752648"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51940,
            "unit": "ns",
            "range": "± 5113.528157032672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7702078.787878788,
            "unit": "ns",
            "range": "± 230167.90305879933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21291713.333333332,
            "unit": "ns",
            "range": "± 340937.92452725524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53147161.538461536,
            "unit": "ns",
            "range": "± 398171.41103311593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106885873.33333333,
            "unit": "ns",
            "range": "± 1031035.7853472724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212845771.42857143,
            "unit": "ns",
            "range": "± 1794478.2063226714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5024606.473214285,
            "unit": "ns",
            "range": "± 28971.043017021006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1558817.3307291667,
            "unit": "ns",
            "range": "± 4687.688809015227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1228167.3046875,
            "unit": "ns",
            "range": "± 4984.32505303866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2705267.8485576925,
            "unit": "ns",
            "range": "± 3770.0161449535776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845778.5574776785,
            "unit": "ns",
            "range": "± 2390.348197585605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788086.9280133928,
            "unit": "ns",
            "range": "± 5313.6425147659265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3547086.6666666665,
            "unit": "ns",
            "range": "± 104074.24317262183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3750535.714285714,
            "unit": "ns",
            "range": "± 61509.45652302776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4457273.9130434785,
            "unit": "ns",
            "range": "± 108854.77906321423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4541280.85106383,
            "unit": "ns",
            "range": "± 167956.74215119367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7038370,
            "unit": "ns",
            "range": "± 160455.17032557886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283614.5833333333,
            "unit": "ns",
            "range": "± 11095.53273309604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273488.52459016396,
            "unit": "ns",
            "range": "± 12349.30630117411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259495,
            "unit": "ns",
            "range": "± 18241.85095495044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4360085.714285715,
            "unit": "ns",
            "range": "± 43341.769818375105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4000573.3333333335,
            "unit": "ns",
            "range": "± 31382.262202594335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25211.57894736842,
            "unit": "ns",
            "range": "± 2811.3320518812875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108751.08695652174,
            "unit": "ns",
            "range": "± 8929.399455154758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94649.47368421052,
            "unit": "ns",
            "range": "± 7817.953610518228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107796.25,
            "unit": "ns",
            "range": "± 6453.091570928217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7291.7525773195875,
            "unit": "ns",
            "range": "± 1345.0271142784932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24211.57894736842,
            "unit": "ns",
            "range": "± 2432.48682653251"
          }
        ]
      }
    ]
  }
}