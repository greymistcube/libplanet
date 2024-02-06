window.BENCHMARK_DATA = {
  "lastUpdate": 1707236787704,
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
        "date": 1707236683319,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959684.5360824743,
            "unit": "ns",
            "range": "± 101159.20964438329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1717923.9436619717,
            "unit": "ns",
            "range": "± 83462.0178195511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1470551.0416666667,
            "unit": "ns",
            "range": "± 129250.9505165429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10825124.444444444,
            "unit": "ns",
            "range": "± 899654.3701266003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34181.944444444445,
            "unit": "ns",
            "range": "± 1701.4762760605481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5165350,
            "unit": "ns",
            "range": "± 28930.307504547756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13138121.42857143,
            "unit": "ns",
            "range": "± 72969.84813101735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32362807.14285714,
            "unit": "ns",
            "range": "± 238370.3597484247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64454373.333333336,
            "unit": "ns",
            "range": "± 425476.25830468186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127849233.33333333,
            "unit": "ns",
            "range": "± 630997.3813242771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3374392.5130208335,
            "unit": "ns",
            "range": "± 7524.216211673896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063766.1207932692,
            "unit": "ns",
            "range": "± 1535.2626651505602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738487.4790736607,
            "unit": "ns",
            "range": "± 1417.40970892696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926497.3697916667,
            "unit": "ns",
            "range": "± 2568.676207146228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641607.4894831731,
            "unit": "ns",
            "range": "± 1233.6906966029226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558032.3692908654,
            "unit": "ns",
            "range": "± 857.931246864784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2160446,
            "unit": "ns",
            "range": "± 87204.22946586188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2336653.5714285714,
            "unit": "ns",
            "range": "± 49947.75405281638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2803093.75,
            "unit": "ns",
            "range": "± 86774.65787889918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2786043.6619718308,
            "unit": "ns",
            "range": "± 135184.22428290153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12346860.43956044,
            "unit": "ns",
            "range": "± 1461120.9764256058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166620,
            "unit": "ns",
            "range": "± 7543.295864540911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158945.90163934426,
            "unit": "ns",
            "range": "± 6585.12398694947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139840.625,
            "unit": "ns",
            "range": "± 3761.7651463281213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2818950,
            "unit": "ns",
            "range": "± 40870.259075800794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2444585.714285714,
            "unit": "ns",
            "range": "± 34051.4510510392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9793.478260869566,
            "unit": "ns",
            "range": "± 1277.084966050117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52268.47826086957,
            "unit": "ns",
            "range": "± 4644.17227505627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43752.72727272727,
            "unit": "ns",
            "range": "± 1855.7073669223366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52151.51515151515,
            "unit": "ns",
            "range": "± 9713.134003538016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2220.618556701031,
            "unit": "ns",
            "range": "± 391.561549102303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9897.701149425287,
            "unit": "ns",
            "range": "± 824.476861831997"
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
        "date": 1707236759203,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000254.5454545454,
            "unit": "ns",
            "range": "± 118540.25431216741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1734655.8823529412,
            "unit": "ns",
            "range": "± 78612.53817878752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1512168.3673469387,
            "unit": "ns",
            "range": "± 142891.78253081156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10735410,
            "unit": "ns",
            "range": "± 922769.3646868075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34281.6091954023,
            "unit": "ns",
            "range": "± 2041.461442751257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5125613.333333333,
            "unit": "ns",
            "range": "± 53440.86005866227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13334057.142857144,
            "unit": "ns",
            "range": "± 120816.11401875748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32817000,
            "unit": "ns",
            "range": "± 372521.65708855103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67449707.6923077,
            "unit": "ns",
            "range": "± 561927.2172051265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130430933.33333333,
            "unit": "ns",
            "range": "± 1929541.8278021584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3319832.872596154,
            "unit": "ns",
            "range": "± 6722.07156162927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074080.3152901786,
            "unit": "ns",
            "range": "± 2633.997330420173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744336.5760216346,
            "unit": "ns",
            "range": "± 1456.855467209145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938291.2239583333,
            "unit": "ns",
            "range": "± 3775.874029273532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 649944.4861778846,
            "unit": "ns",
            "range": "± 1207.7037843714636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558881.34765625,
            "unit": "ns",
            "range": "± 1316.4189749535662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156335.714285714,
            "unit": "ns",
            "range": "± 35247.90462169035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2359470.9677419355,
            "unit": "ns",
            "range": "± 60662.597996615055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2799935.294117647,
            "unit": "ns",
            "range": "± 133219.78783221904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2775287.1428571427,
            "unit": "ns",
            "range": "± 128617.21538413006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12242320.114942528,
            "unit": "ns",
            "range": "± 1408930.804258861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179513.58024691357,
            "unit": "ns",
            "range": "± 9434.958307889068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171062.35294117648,
            "unit": "ns",
            "range": "± 9111.374059652142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137802.22222222222,
            "unit": "ns",
            "range": "± 4755.737629857265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2857735.714285714,
            "unit": "ns",
            "range": "± 43040.81438932938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2481946.153846154,
            "unit": "ns",
            "range": "± 36458.84930037826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10853.40909090909,
            "unit": "ns",
            "range": "± 981.3137878687087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53669.767441860466,
            "unit": "ns",
            "range": "± 4434.518868190693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44187.5,
            "unit": "ns",
            "range": "± 1890.4605018595096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57621.42857142857,
            "unit": "ns",
            "range": "± 14373.301782252793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2475,
            "unit": "ns",
            "range": "± 506.3803438440111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9676.136363636364,
            "unit": "ns",
            "range": "± 1073.7188910759144"
          }
        ]
      }
    ]
  }
}