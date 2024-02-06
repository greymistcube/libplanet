window.BENCHMARK_DATA = {
  "lastUpdate": 1707238881978,
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
          "id": "6446a54e8658dd319dd34918ce1d931d20a4268d",
          "message": "Downgraded xunit packages",
          "timestamp": "2024-02-07T01:35:07+09:00",
          "tree_id": "3b5befe52d1e5fd1c88bf27e90532de3ab9bf878",
          "url": "https://github.com/greymistcube/libplanet/commit/6446a54e8658dd319dd34918ce1d931d20a4268d"
        },
        "date": 1707238011869,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223327.85416666666,
            "unit": "ns",
            "range": "± 18521.73731590969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205971.8656716418,
            "unit": "ns",
            "range": "± 9760.195263036061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174719.7068965517,
            "unit": "ns",
            "range": "± 12328.950365683479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3217084.214285714,
            "unit": "ns",
            "range": "± 30533.435391332943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2973826,
            "unit": "ns",
            "range": "± 40440.92658610652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18877.484536082473,
            "unit": "ns",
            "range": "± 3698.8399367048232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80944.6170212766,
            "unit": "ns",
            "range": "± 12000.69138698803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80883.23,
            "unit": "ns",
            "range": "± 15781.129854735376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80804.67010309278,
            "unit": "ns",
            "range": "± 12669.946912478927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5000.255102040816,
            "unit": "ns",
            "range": "± 1341.7450194201017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16689.505263157895,
            "unit": "ns",
            "range": "± 3837.812779889431"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45133.447916666664,
            "unit": "ns",
            "range": "± 8661.183400205518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2446680.5454545454,
            "unit": "ns",
            "range": "± 76755.18278229283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2592389.7560975607,
            "unit": "ns",
            "range": "± 92135.16213280913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3149006.5555555555,
            "unit": "ns",
            "range": "± 63963.45750272271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3280782.024390244,
            "unit": "ns",
            "range": "± 171067.86732416728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14369958.88764045,
            "unit": "ns",
            "range": "± 1010080.2099260532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070857.7555555555,
            "unit": "ns",
            "range": "± 90967.59949037184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2000354.8148148148,
            "unit": "ns",
            "range": "± 104555.7730954048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1635862.911111111,
            "unit": "ns",
            "range": "± 142501.22243549346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12998073.6185567,
            "unit": "ns",
            "range": "± 1057790.611883783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6040791.846153846,
            "unit": "ns",
            "range": "± 100338.36598218231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14945163.133333333,
            "unit": "ns",
            "range": "± 109961.55974239796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37780323.461538464,
            "unit": "ns",
            "range": "± 325011.03389208583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76738071.5,
            "unit": "ns",
            "range": "± 349075.2611318736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150868705.85714287,
            "unit": "ns",
            "range": "± 1086863.1998227288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3810531.18515625,
            "unit": "ns",
            "range": "± 70466.99318472637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203101.6568080357,
            "unit": "ns",
            "range": "± 5628.426145435429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 801170.68359375,
            "unit": "ns",
            "range": "± 11250.854503283035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933079.8419270834,
            "unit": "ns",
            "range": "± 25638.823084424468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619780.4505859375,
            "unit": "ns",
            "range": "± 11243.22338827052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567389.001171875,
            "unit": "ns",
            "range": "± 2341.367210878324"
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
          "id": "2610dcd684e0d9dbec592eb2682c74a1bd9b5188",
          "message": "Build fix due to package downgrade",
          "timestamp": "2024-02-07T01:50:20+09:00",
          "tree_id": "856532154e88ff8421809c0378287e33f968436f",
          "url": "https://github.com/greymistcube/libplanet/commit/2610dcd684e0d9dbec592eb2682c74a1bd9b5188"
        },
        "date": 1707238874726,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975415.0105263158,
            "unit": "ns",
            "range": "± 80235.76040571228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1889410.4444444445,
            "unit": "ns",
            "range": "± 78890.2676505663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1640723.6421052632,
            "unit": "ns",
            "range": "± 161034.63212375235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13074922.80412371,
            "unit": "ns",
            "range": "± 1109350.0561784916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39515,
            "unit": "ns",
            "range": "± 5212.147903544282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202578.44736842104,
            "unit": "ns",
            "range": "± 4499.915177888039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189074.61016949153,
            "unit": "ns",
            "range": "± 6917.544317161603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167417.4375,
            "unit": "ns",
            "range": "± 3283.7508932875326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3232716.4615384615,
            "unit": "ns",
            "range": "± 27657.04722614529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2792842.769230769,
            "unit": "ns",
            "range": "± 30301.077992798226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14761.57142857143,
            "unit": "ns",
            "range": "± 3064.178600350404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62478.072916666664,
            "unit": "ns",
            "range": "± 5702.85347827096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55063.69512195122,
            "unit": "ns",
            "range": "± 4793.124040372382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69425.89361702128,
            "unit": "ns",
            "range": "± 12344.076816035045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5575.707070707071,
            "unit": "ns",
            "range": "± 2122.23512927505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12180.611111111111,
            "unit": "ns",
            "range": "± 1075.295083037904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5785003.230769231,
            "unit": "ns",
            "range": "± 39842.73815087229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14441772.9,
            "unit": "ns",
            "range": "± 136660.1226870098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36562796.166666664,
            "unit": "ns",
            "range": "± 238237.1328944921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74534856.15384616,
            "unit": "ns",
            "range": "± 559975.9020441335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150851258.2857143,
            "unit": "ns",
            "range": "± 513395.16866571375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2358113.157142857,
            "unit": "ns",
            "range": "± 113603.78866496011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527621.1481481483,
            "unit": "ns",
            "range": "± 69228.59409104999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3148442.8,
            "unit": "ns",
            "range": "± 103354.86671196019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3101243.987179487,
            "unit": "ns",
            "range": "± 158912.20480630946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13937604.236263737,
            "unit": "ns",
            "range": "± 1013325.1815124612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746232.276875,
            "unit": "ns",
            "range": "± 97138.99916508632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216160.4350585938,
            "unit": "ns",
            "range": "± 2885.1806479318843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758741.2326822917,
            "unit": "ns",
            "range": "± 12897.145927621772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954004.40234375,
            "unit": "ns",
            "range": "± 4136.361909997616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607109.5637369792,
            "unit": "ns",
            "range": "± 1344.1763964843835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577670.8236490885,
            "unit": "ns",
            "range": "± 454.6606156449238"
          }
        ]
      }
    ]
  }
}