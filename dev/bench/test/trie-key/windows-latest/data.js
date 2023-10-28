window.BENCHMARK_DATA = {
  "lastUpdate": 1698491282558,
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
          "id": "d513aa040397dea6f1673fd73b03d7ceec5b4e04",
          "message": "Fixed trie key conversion",
          "timestamp": "2023-10-28T19:52:12+09:00",
          "tree_id": "07ce30e41caa5c9406c7e657fa5b57405dd93423",
          "url": "https://github.com/greymistcube/libplanet/commit/d513aa040397dea6f1673fd73b03d7ceec5b4e04"
        },
        "date": 1698491208094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1240113.1313131314,
            "unit": "ns",
            "range": "± 102159.88434148824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2371716.0714285714,
            "unit": "ns",
            "range": "± 101091.13579841204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1782012.121212121,
            "unit": "ns",
            "range": "± 120412.93854874709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7247961.224489796,
            "unit": "ns",
            "range": "± 274724.75302285625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47777.92207792208,
            "unit": "ns",
            "range": "± 2465.9589453525055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7212069.230769231,
            "unit": "ns",
            "range": "± 30785.829657365215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19697345.833333332,
            "unit": "ns",
            "range": "± 509885.6406132881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48106758.823529415,
            "unit": "ns",
            "range": "± 936952.949098048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94440876.92307693,
            "unit": "ns",
            "range": "± 631221.3625898157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188795513.33333334,
            "unit": "ns",
            "range": "± 1484579.1317342946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4451336.041666667,
            "unit": "ns",
            "range": "± 21854.25957507119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1393297.109375,
            "unit": "ns",
            "range": "± 5696.791650936459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1043851.7057291666,
            "unit": "ns",
            "range": "± 2970.088835563974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638008.6197916665,
            "unit": "ns",
            "range": "± 7860.8411374044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833964.7200520834,
            "unit": "ns",
            "range": "± 4378.167198737327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760664.0169270834,
            "unit": "ns",
            "range": "± 2321.876764651929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3045417.6470588236,
            "unit": "ns",
            "range": "± 79926.11539145779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3218360,
            "unit": "ns",
            "range": "± 44292.80496230253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3995080,
            "unit": "ns",
            "range": "± 65264.56268800966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3624453.2258064514,
            "unit": "ns",
            "range": "± 162720.61213126752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8706574.137931034,
            "unit": "ns",
            "range": "± 379519.7202930949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232102.04081632654,
            "unit": "ns",
            "range": "± 8865.816605459006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224628.20512820513,
            "unit": "ns",
            "range": "± 7843.567552894226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201320,
            "unit": "ns",
            "range": "± 3495.752524748529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3917613.3333333335,
            "unit": "ns",
            "range": "± 66484.30391202623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3569615.3846153845,
            "unit": "ns",
            "range": "± 29134.454006492215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18737.5,
            "unit": "ns",
            "range": "± 1455.5339045753697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77975.64102564103,
            "unit": "ns",
            "range": "± 4016.9183089319476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65714.28571428571,
            "unit": "ns",
            "range": "± 1091.123022646599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70347.42268041238,
            "unit": "ns",
            "range": "± 8922.911669585788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4696.808510638298,
            "unit": "ns",
            "range": "± 488.0181839683635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16740,
            "unit": "ns",
            "range": "± 962.4173684068861"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b13ef3155389100c218a045fbdc3051e23e3c669",
          "message": "Merge pull request #3451 from greymistcube/release/3.6.0\n\n🚀 Release 3.6.0",
          "timestamp": "2023-10-06T18:26:22+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/greymistcube/libplanet/commit/b13ef3155389100c218a045fbdc3051e23e3c669"
        },
        "date": 1698491256973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1287051.0204081633,
            "unit": "ns",
            "range": "± 117892.1455765343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2397206.6666666665,
            "unit": "ns",
            "range": "± 104485.77531385722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1865289.5833333333,
            "unit": "ns",
            "range": "± 112299.2079263126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8752723.595505618,
            "unit": "ns",
            "range": "± 559255.9960304549"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49828.865979381444,
            "unit": "ns",
            "range": "± 3629.364004285238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7308380,
            "unit": "ns",
            "range": "± 106507.83472187788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20742546.153846152,
            "unit": "ns",
            "range": "± 268841.6529464405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50579369.23076923,
            "unit": "ns",
            "range": "± 714487.1463558265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101585847.05882353,
            "unit": "ns",
            "range": "± 2053424.2797451916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201088150,
            "unit": "ns",
            "range": "± 2685860.821684835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4482530.416666667,
            "unit": "ns",
            "range": "± 22461.34031561672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1437182.5911458333,
            "unit": "ns",
            "range": "± 6971.849684987569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1061469.9068509615,
            "unit": "ns",
            "range": "± 3198.9857570954173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666975.078125,
            "unit": "ns",
            "range": "± 4776.831521040487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844779.98046875,
            "unit": "ns",
            "range": "± 3078.235377157775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755373.22265625,
            "unit": "ns",
            "range": "± 2471.3247529549203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3204015.217391304,
            "unit": "ns",
            "range": "± 110353.36367504226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3400672.6315789474,
            "unit": "ns",
            "range": "± 232341.74318443047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4000655.5555555555,
            "unit": "ns",
            "range": "± 100416.87849748909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4005595.3488372094,
            "unit": "ns",
            "range": "± 145011.57417433365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9694354.838709677,
            "unit": "ns",
            "range": "± 234482.86055162566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253498.03921568627,
            "unit": "ns",
            "range": "± 7159.035974098145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254061.84210526315,
            "unit": "ns",
            "range": "± 12902.7642217241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219861.90476190476,
            "unit": "ns",
            "range": "± 11527.25324665452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4127784.6153846155,
            "unit": "ns",
            "range": "± 40187.7022266316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3795086.6666666665,
            "unit": "ns",
            "range": "± 66797.43222894838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22238.172043010753,
            "unit": "ns",
            "range": "± 2101.1823515409847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87496.84210526316,
            "unit": "ns",
            "range": "± 7118.920738061636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67865.21739130435,
            "unit": "ns",
            "range": "± 2518.572557912239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76409.89010989011,
            "unit": "ns",
            "range": "± 8362.403361940273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4972.448979591837,
            "unit": "ns",
            "range": "± 630.4605765685873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19248.91304347826,
            "unit": "ns",
            "range": "± 1205.5270668213914"
          }
        ]
      }
    ]
  }
}