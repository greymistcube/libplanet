window.BENCHMARK_DATA = {
  "lastUpdate": 1693482209761,
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
          "id": "571d2e2ecda5fef58ff55aa70421c94e053a5be9",
          "message": "Refactor NodeDecoder",
          "timestamp": "2023-08-31T10:55:48+09:00",
          "tree_id": "f99d98bba7f37125fa41427b2ed6228f30cb9410",
          "url": "https://github.com/greymistcube/libplanet/commit/571d2e2ecda5fef58ff55aa70421c94e053a5be9"
        },
        "date": 1693448037270,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294556.25,
            "unit": "ns",
            "range": "± 65307.06407940022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2531965.625,
            "unit": "ns",
            "range": "± 78255.67941617462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1736706.1855670102,
            "unit": "ns",
            "range": "± 120481.05903560197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4490797.05882353,
            "unit": "ns",
            "range": "± 143844.89644583012"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50024.489795918365,
            "unit": "ns",
            "range": "± 3954.1981142450277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7897034.782608695,
            "unit": "ns",
            "range": "± 198373.57918078717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20858492.307692308,
            "unit": "ns",
            "range": "± 184835.307149989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52997150,
            "unit": "ns",
            "range": "± 222446.24818893516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106331293.33333333,
            "unit": "ns",
            "range": "± 1417043.7650599356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213706300,
            "unit": "ns",
            "range": "± 2435879.1941661285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4605085.729166667,
            "unit": "ns",
            "range": "± 15492.505600917393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1425111.7885044643,
            "unit": "ns",
            "range": "± 3140.314467865051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062158.75,
            "unit": "ns",
            "range": "± 3231.226575165182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675287.6395089286,
            "unit": "ns",
            "range": "± 6969.1347573734865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833217.4455915178,
            "unit": "ns",
            "range": "± 3038.2967589788054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770911.2862723215,
            "unit": "ns",
            "range": "± 1647.533201680051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3387918.1818181816,
            "unit": "ns",
            "range": "± 105057.34283757089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3573986.3636363638,
            "unit": "ns",
            "range": "± 86856.3252375222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4275956.25,
            "unit": "ns",
            "range": "± 80707.3723914571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3955155,
            "unit": "ns",
            "range": "± 86379.08174528075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6156423.076923077,
            "unit": "ns",
            "range": "± 168117.03615682095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259859.64912280702,
            "unit": "ns",
            "range": "± 11275.318488519242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253418.42105263157,
            "unit": "ns",
            "range": "± 8659.157167123727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228582.6530612245,
            "unit": "ns",
            "range": "± 13771.223736399765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4250940,
            "unit": "ns",
            "range": "± 55079.550262714176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822157.1428571427,
            "unit": "ns",
            "range": "± 39891.327653739754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22761.224489795917,
            "unit": "ns",
            "range": "± 2908.3822212634086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88735.41666666667,
            "unit": "ns",
            "range": "± 6095.2091482904425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78985.85858585859,
            "unit": "ns",
            "range": "± 8078.821015482776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86818.6046511628,
            "unit": "ns",
            "range": "± 8943.713028489794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6681.632653061224,
            "unit": "ns",
            "range": "± 1192.7916608273551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23752.577319587628,
            "unit": "ns",
            "range": "± 3166.231092307841"
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
          "id": "b009c43def68be5293857b846e3d88bf5d14f615",
          "message": "Refactor NodeDecoder",
          "timestamp": "2023-08-31T20:21:28+09:00",
          "tree_id": "a28e26137d61b69419adef608eb66cfff1c312f0",
          "url": "https://github.com/greymistcube/libplanet/commit/b009c43def68be5293857b846e3d88bf5d14f615"
        },
        "date": 1693482184347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427436.3636363635,
            "unit": "ns",
            "range": "± 199335.49683096085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2717800,
            "unit": "ns",
            "range": "± 223770.65514777214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1856200.505050505,
            "unit": "ns",
            "range": "± 249397.7989419499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5378229.896907217,
            "unit": "ns",
            "range": "± 408349.85234399704"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57786.31578947369,
            "unit": "ns",
            "range": "± 14778.849252169975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7956825,
            "unit": "ns",
            "range": "± 402735.342087911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20187240.625,
            "unit": "ns",
            "range": "± 930734.3952567182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53391142.307692304,
            "unit": "ns",
            "range": "± 2199164.033806193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107811186.15384616,
            "unit": "ns",
            "range": "± 5034360.374338685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212326925,
            "unit": "ns",
            "range": "± 5580472.447716432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5253342.007211538,
            "unit": "ns",
            "range": "± 213686.83770773842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1666526.4364919355,
            "unit": "ns",
            "range": "± 50569.453497551134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176675.1493566176,
            "unit": "ns",
            "range": "± 23978.29090405837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2714607.0977393617,
            "unit": "ns",
            "range": "± 105163.29091820885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863577.9440487132,
            "unit": "ns",
            "range": "± 16085.34335950472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838068.7599311441,
            "unit": "ns",
            "range": "± 36618.13354513343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3450061.4583333335,
            "unit": "ns",
            "range": "± 261887.91912402917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3437097.8947368423,
            "unit": "ns",
            "range": "± 260121.55463746193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4416185.714285715,
            "unit": "ns",
            "range": "± 379026.0601572806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3836039.175257732,
            "unit": "ns",
            "range": "± 330536.9878308822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7063941.8367346935,
            "unit": "ns",
            "range": "± 524217.4153353945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294393.6170212766,
            "unit": "ns",
            "range": "± 43354.11778265087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278517.3469387755,
            "unit": "ns",
            "range": "± 40546.1529707043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243795.91836734695,
            "unit": "ns",
            "range": "± 38019.38983975258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4273113.684210527,
            "unit": "ns",
            "range": "± 287999.8953200631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3841140.206185567,
            "unit": "ns",
            "range": "± 259623.49127301713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24781.443298969072,
            "unit": "ns",
            "range": "± 9523.045839533468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93067.01030927835,
            "unit": "ns",
            "range": "± 21272.53570554396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92700,
            "unit": "ns",
            "range": "± 19373.166466723203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105801.02040816327,
            "unit": "ns",
            "range": "± 26596.3430355671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5425.842696629214,
            "unit": "ns",
            "range": "± 892.4593306098858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27593,
            "unit": "ns",
            "range": "± 11072.61847071323"
          }
        ]
      }
    ]
  }
}