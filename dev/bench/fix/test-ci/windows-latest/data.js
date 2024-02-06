window.BENCHMARK_DATA = {
  "lastUpdate": 1707238932697,
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
        "date": 1707238012996,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1053078.5714285714,
            "unit": "ns",
            "range": "± 136589.71448499622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1809930.4347826086,
            "unit": "ns",
            "range": "± 106645.2517596813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1565428.5714285714,
            "unit": "ns",
            "range": "± 214292.26215392756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10990551.111111112,
            "unit": "ns",
            "range": "± 953154.228915696"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34250.81967213115,
            "unit": "ns",
            "range": "± 1362.0600758678836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4941264.285714285,
            "unit": "ns",
            "range": "± 33327.364758682044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13176200,
            "unit": "ns",
            "range": "± 49698.073016350056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32244092.85714286,
            "unit": "ns",
            "range": "± 255686.41991640918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63275093.333333336,
            "unit": "ns",
            "range": "± 396986.29963165993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127892700,
            "unit": "ns",
            "range": "± 998901.6444999054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3263034.405048077,
            "unit": "ns",
            "range": "± 13606.965264878987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076681.3541666667,
            "unit": "ns",
            "range": "± 17346.03910072761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724234.375,
            "unit": "ns",
            "range": "± 850.6652155069552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959784.7098214286,
            "unit": "ns",
            "range": "± 1464.3203700986485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622253.9632161459,
            "unit": "ns",
            "range": "± 729.6835499421976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571456.4592633928,
            "unit": "ns",
            "range": "± 1299.820944546403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2313300,
            "unit": "ns",
            "range": "± 52955.82071282081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2374200,
            "unit": "ns",
            "range": "± 39433.015257620005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2848829.411764706,
            "unit": "ns",
            "range": "± 56079.55024679097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2771433.3333333335,
            "unit": "ns",
            "range": "± 86291.4496674745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12421556.043956043,
            "unit": "ns",
            "range": "± 1522485.7944390222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165360.29411764705,
            "unit": "ns",
            "range": "± 7816.708848718656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160118.75,
            "unit": "ns",
            "range": "± 6495.123323242368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141671.11111111112,
            "unit": "ns",
            "range": "± 5370.907415385826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752100,
            "unit": "ns",
            "range": "± 18129.985207836315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2493368.75,
            "unit": "ns",
            "range": "± 48144.957766450825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9802.247191011236,
            "unit": "ns",
            "range": "± 901.5110456755227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52220,
            "unit": "ns",
            "range": "± 4961.116895525021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45272.72727272727,
            "unit": "ns",
            "range": "± 1912.1884442869762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56684.536082474224,
            "unit": "ns",
            "range": "± 12449.735106002136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2206.521739130435,
            "unit": "ns",
            "range": "± 429.87459143031674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9371.27659574468,
            "unit": "ns",
            "range": "± 1036.08260770268"
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
        "date": 1707238908813,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960979.381443299,
            "unit": "ns",
            "range": "± 106956.96558482482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1686888.7096774194,
            "unit": "ns",
            "range": "± 67432.07901492424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1453845.4545454546,
            "unit": "ns",
            "range": "± 124551.4017918373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10980780.208333334,
            "unit": "ns",
            "range": "± 909966.9149127048"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34979.10447761194,
            "unit": "ns",
            "range": "± 1531.5408475476324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4983475,
            "unit": "ns",
            "range": "± 37085.506235283785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13224813.333333334,
            "unit": "ns",
            "range": "± 83069.72859907399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31781278.57142857,
            "unit": "ns",
            "range": "± 232831.64329806875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65157073.333333336,
            "unit": "ns",
            "range": "± 541448.325547411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131397885.71428572,
            "unit": "ns",
            "range": "± 984587.5668031243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3455806.340144231,
            "unit": "ns",
            "range": "± 13457.166346754979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084322.4869791667,
            "unit": "ns",
            "range": "± 5231.142846662885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749037.2395833334,
            "unit": "ns",
            "range": "± 2832.77367107935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961418.9322916667,
            "unit": "ns",
            "range": "± 10671.568771329417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624622.7083333334,
            "unit": "ns",
            "range": "± 2311.931689582946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565021.3792067308,
            "unit": "ns",
            "range": "± 977.5089671816656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2169682.1428571427,
            "unit": "ns",
            "range": "± 54795.66793887747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2365675.757575758,
            "unit": "ns",
            "range": "± 73795.37599971556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2880558.064516129,
            "unit": "ns",
            "range": "± 78905.95572871776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3067684.375,
            "unit": "ns",
            "range": "± 94787.41276641964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12578068.8172043,
            "unit": "ns",
            "range": "± 1350958.7729025197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168979.4871794872,
            "unit": "ns",
            "range": "± 8676.859192581464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166575.55555555556,
            "unit": "ns",
            "range": "± 10950.904853190008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142393.9393939394,
            "unit": "ns",
            "range": "± 4412.194705723233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2798380,
            "unit": "ns",
            "range": "± 40319.58403980449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2413512.5,
            "unit": "ns",
            "range": "± 47025.7500383212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11002.040816326531,
            "unit": "ns",
            "range": "± 1763.1964642412165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57084.69387755102,
            "unit": "ns",
            "range": "± 8547.47025987615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46161.53846153846,
            "unit": "ns",
            "range": "± 1900.1706678925332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59658.06451612903,
            "unit": "ns",
            "range": "± 9649.074325738118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2708.2474226804125,
            "unit": "ns",
            "range": "± 467.8563933633872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9583.14606741573,
            "unit": "ns",
            "range": "± 984.3359500255835"
          }
        ]
      }
    ]
  }
}