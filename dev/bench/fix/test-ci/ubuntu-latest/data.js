window.BENCHMARK_DATA = {
  "lastUpdate": 1707236662493,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89190968ea5bc627a904f2997040d8261ffad241",
          "message": "Merge pull request #3654 from greymistcube/merge/4.0.2-to-main\n\n🔀 Merge 4.0.2 to main",
          "timestamp": "2024-02-06T15:08:58+09:00",
          "tree_id": "1962cabcefac60b16dcc0d70eadaa10d61f02fac",
          "url": "https://github.com/greymistcube/libplanet/commit/89190968ea5bc627a904f2997040d8261ffad241"
        },
        "date": 1707236614150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237362.64864864864,
            "unit": "ns",
            "range": "± 6686.771273758926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240010.375,
            "unit": "ns",
            "range": "± 2279.915404132355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184825.156626506,
            "unit": "ns",
            "range": "± 9847.084490496356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3316588.5,
            "unit": "ns",
            "range": "± 31745.74929934594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2940573.153846154,
            "unit": "ns",
            "range": "± 48825.90314209278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21201.894736842107,
            "unit": "ns",
            "range": "± 4012.443428311175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84078.13,
            "unit": "ns",
            "range": "± 12404.723713862908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91926.68421052632,
            "unit": "ns",
            "range": "± 1141.6932382616608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97940.0306122449,
            "unit": "ns",
            "range": "± 13244.894569952467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4742.515151515152,
            "unit": "ns",
            "range": "± 2045.1544643208135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18035.979166666668,
            "unit": "ns",
            "range": "± 4344.4367958626835"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43646.05670103093,
            "unit": "ns",
            "range": "± 7199.559326747413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2440666.6621621624,
            "unit": "ns",
            "range": "± 81574.6722139066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2529680.2045454546,
            "unit": "ns",
            "range": "± 94736.68345707253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3233974.6052631577,
            "unit": "ns",
            "range": "± 71548.5696036031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3192468.3314606743,
            "unit": "ns",
            "range": "± 180931.66006259204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13775656.811764706,
            "unit": "ns",
            "range": "± 898248.0142784367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1073534.074468085,
            "unit": "ns",
            "range": "± 102315.07359125362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1984463.4888888889,
            "unit": "ns",
            "range": "± 74298.75566363575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1850607.7604166667,
            "unit": "ns",
            "range": "± 221772.77291226404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12766640.244444445,
            "unit": "ns",
            "range": "± 966387.5816755801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5711218.181818182,
            "unit": "ns",
            "range": "± 105608.44168487776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14639835.307692308,
            "unit": "ns",
            "range": "± 175851.47647725558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36758365.733333334,
            "unit": "ns",
            "range": "± 356993.3282224647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75438802.66666667,
            "unit": "ns",
            "range": "± 430716.30601789034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149481505.46153846,
            "unit": "ns",
            "range": "± 709578.4576421195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3682882.1877790177,
            "unit": "ns",
            "range": "± 22882.434169901142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196673.4106069712,
            "unit": "ns",
            "range": "± 5202.668248235347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766578.5244140625,
            "unit": "ns",
            "range": "± 2481.8647288366806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920010.5051618305,
            "unit": "ns",
            "range": "± 9990.263732254689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617860.6374699519,
            "unit": "ns",
            "range": "± 1424.2979346033721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571569.5369001116,
            "unit": "ns",
            "range": "± 2020.164476279843"
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
          "id": "0787f0eac259a9ebf461e7944ed35bcba5cfd588",
          "message": "Test commit",
          "timestamp": "2024-02-07T01:13:13+09:00",
          "tree_id": "ddfa690097555daebedc436aff744a69b8b28889",
          "url": "https://github.com/greymistcube/libplanet/commit/0787f0eac259a9ebf461e7944ed35bcba5cfd588"
        },
        "date": 1707236655256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199701.37878787878,
            "unit": "ns",
            "range": "± 6192.378368595421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190012.51428571428,
            "unit": "ns",
            "range": "± 6019.674587508514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169110.4,
            "unit": "ns",
            "range": "± 2816.581534920859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3168526.6923076925,
            "unit": "ns",
            "range": "± 26604.314829818537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2799138.214285714,
            "unit": "ns",
            "range": "± 24768.839152260432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14976.252525252525,
            "unit": "ns",
            "range": "± 2845.0010772331607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67412.5306122449,
            "unit": "ns",
            "range": "± 6576.406994146688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52843.25,
            "unit": "ns",
            "range": "± 1495.3703276000451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65974.88775510204,
            "unit": "ns",
            "range": "± 13402.76731744686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2851.3978494623657,
            "unit": "ns",
            "range": "± 271.0314092092162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13747.324742268042,
            "unit": "ns",
            "range": "± 2260.063914151126"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38421.625,
            "unit": "ns",
            "range": "± 4525.906318657419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2305746.888888889,
            "unit": "ns",
            "range": "± 76824.0846285582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2447581,
            "unit": "ns",
            "range": "± 60819.842792239506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3070431.28125,
            "unit": "ns",
            "range": "± 95136.28815351178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3130077.247126437,
            "unit": "ns",
            "range": "± 235036.60401808462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13840028.01098901,
            "unit": "ns",
            "range": "± 956550.9589777744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979415.8958333334,
            "unit": "ns",
            "range": "± 86575.29059561597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1877134.1851851852,
            "unit": "ns",
            "range": "± 78782.12184558982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1592704.4615384615,
            "unit": "ns",
            "range": "± 141879.11880567027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12700115.235955056,
            "unit": "ns",
            "range": "± 1042664.9086345246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5638179.357142857,
            "unit": "ns",
            "range": "± 21660.750053094594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13972394,
            "unit": "ns",
            "range": "± 61471.97840761393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36053472.21428572,
            "unit": "ns",
            "range": "± 108970.13456424908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73542732.66666667,
            "unit": "ns",
            "range": "± 296737.8278236787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147913500.23076922,
            "unit": "ns",
            "range": "± 848451.5552136878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3735291.5360576925,
            "unit": "ns",
            "range": "± 23537.408443075925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1180347.287109375,
            "unit": "ns",
            "range": "± 3591.321097691753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759810.7425130209,
            "unit": "ns",
            "range": "± 2762.966082499694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929377.3696614583,
            "unit": "ns",
            "range": "± 24275.24708732436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613473.9010667067,
            "unit": "ns",
            "range": "± 1683.785264001257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572069.7130998884,
            "unit": "ns",
            "range": "± 798.5754276022444"
          }
        ]
      }
    ]
  }
}