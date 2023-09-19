window.BENCHMARK_DATA = {
  "lastUpdate": 1695088527465,
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
          "id": "86231891c004ef7bec83a29f3f51478f5228fd50",
          "message": "Use HashDigest instead of IAccount",
          "timestamp": "2023-09-19T09:40:37+09:00",
          "tree_id": "c1b09f4047d1684df6c3011fc1869c6becd44299",
          "url": "https://github.com/greymistcube/libplanet/commit/86231891c004ef7bec83a29f3f51478f5228fd50"
        },
        "date": 1695084838272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258273.11111111112,
            "unit": "ns",
            "range": "± 7586.355163912105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251674.1590909091,
            "unit": "ns",
            "range": "± 9302.26308034566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220353,
            "unit": "ns",
            "range": "± 3060.103065132083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4155308.6153846155,
            "unit": "ns",
            "range": "± 23772.715945450513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825659.714285714,
            "unit": "ns",
            "range": "± 31580.164145402243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16211.355555555556,
            "unit": "ns",
            "range": "± 967.1353310495354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77891.01265822785,
            "unit": "ns",
            "range": "± 3741.237165093753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67615.21428571429,
            "unit": "ns",
            "range": "± 1109.9747868634347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72687.78571428571,
            "unit": "ns",
            "range": "± 13095.326977373645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4393.8877551020405,
            "unit": "ns",
            "range": "± 370.5045287549105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15997.882352941177,
            "unit": "ns",
            "range": "± 850.3167394700455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298136.1463414636,
            "unit": "ns",
            "range": "± 114300.48824907988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3488089.238095238,
            "unit": "ns",
            "range": "± 81912.0946294897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4142574.8571428573,
            "unit": "ns",
            "range": "± 63688.44329879774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3749129.75,
            "unit": "ns",
            "range": "± 64144.22749762185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5992067.666666667,
            "unit": "ns",
            "range": "± 157876.6619599274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354225.8723404256,
            "unit": "ns",
            "range": "± 82893.69495877845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2586322.023255814,
            "unit": "ns",
            "range": "± 84961.61626973744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1660078.0975609757,
            "unit": "ns",
            "range": "± 80723.90943202865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4381648.236842105,
            "unit": "ns",
            "range": "± 150258.91740636088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46939.555555555555,
            "unit": "ns",
            "range": "± 2471.016030907125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7817287.928571428,
            "unit": "ns",
            "range": "± 15414.56800694263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21016967.266666666,
            "unit": "ns",
            "range": "± 151931.77593646935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51985218,
            "unit": "ns",
            "range": "± 521848.90254260675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103486554.66666667,
            "unit": "ns",
            "range": "± 1265814.245220763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205741692.2,
            "unit": "ns",
            "range": "± 2575878.559265063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4940481.043526785,
            "unit": "ns",
            "range": "± 14615.791746195668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1544099.8629807692,
            "unit": "ns",
            "range": "± 3816.4834132237725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1045071.6501302083,
            "unit": "ns",
            "range": "± 2478.458361293455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586003.027083333,
            "unit": "ns",
            "range": "± 7500.855218936086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801988.4000418527,
            "unit": "ns",
            "range": "± 1410.8513538127909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742020.3311244419,
            "unit": "ns",
            "range": "± 1291.058805084715"
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
          "id": "22278b2f685b047b90c1d0e7d91c565e35236b59",
          "message": "Use HashDigest instead of IAccount",
          "timestamp": "2023-09-19T09:49:30+09:00",
          "tree_id": "bbc406acfa1d2e0ed2fd9c70074284587684575b",
          "url": "https://github.com/greymistcube/libplanet/commit/22278b2f685b047b90c1d0e7d91c565e35236b59"
        },
        "date": 1695085606872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334897.925,
            "unit": "ns",
            "range": "± 11842.301637399456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319092.28125,
            "unit": "ns",
            "range": "± 9715.735219417553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288960.7454545455,
            "unit": "ns",
            "range": "± 12230.633609489014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5330194.533333333,
            "unit": "ns",
            "range": "± 60467.75247880556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4928833.8,
            "unit": "ns",
            "range": "± 50421.86371746741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25487.875,
            "unit": "ns",
            "range": "± 2841.3905463420733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108278.95698924731,
            "unit": "ns",
            "range": "± 6136.7108647271625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93087.07142857143,
            "unit": "ns",
            "range": "± 6390.808817775793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102072.55913978495,
            "unit": "ns",
            "range": "± 12294.53671038868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6487.867346938776,
            "unit": "ns",
            "range": "± 767.7278383438666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24447.14893617021,
            "unit": "ns",
            "range": "± 2026.6537596369214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4374051.625,
            "unit": "ns",
            "range": "± 80379.05497319145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4572560.9375,
            "unit": "ns",
            "range": "± 87135.14478056008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5448940.066666666,
            "unit": "ns",
            "range": "± 52493.728264114245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4880199.148148148,
            "unit": "ns",
            "range": "± 133565.57209150514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7596462.176470588,
            "unit": "ns",
            "range": "± 220477.91059622506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710126.0705882353,
            "unit": "ns",
            "range": "± 77705.0626020915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3321720.9523809524,
            "unit": "ns",
            "range": "± 119147.5400515644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2180156.295774648,
            "unit": "ns",
            "range": "± 106552.84106266501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5683980.369565218,
            "unit": "ns",
            "range": "± 216011.42685601496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57079.344086021505,
            "unit": "ns",
            "range": "± 3585.7092546076256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10282888.277777778,
            "unit": "ns",
            "range": "± 218139.95096073896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27225335.666666668,
            "unit": "ns",
            "range": "± 258472.39611988043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67526650.2,
            "unit": "ns",
            "range": "± 744660.9275805809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136136005.76923078,
            "unit": "ns",
            "range": "± 620024.9756284222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270272037.9230769,
            "unit": "ns",
            "range": "± 1508631.6936024325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5995552.827566965,
            "unit": "ns",
            "range": "± 16170.904152759273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903082.112079327,
            "unit": "ns",
            "range": "± 987.7904745957793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1319718.88984375,
            "unit": "ns",
            "range": "± 1416.6467286724671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3095888.6336495536,
            "unit": "ns",
            "range": "± 4242.7277136904995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002082.453125,
            "unit": "ns",
            "range": "± 2665.788893597508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912461.02734375,
            "unit": "ns",
            "range": "± 397.2218243830066"
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
          "id": "d4f6077e3af48c1eea5f1c5a23b3041c0617605a",
          "message": "Changelog",
          "timestamp": "2023-09-19T10:36:30+09:00",
          "tree_id": "15cb617948f85d7aaab0ab64dcea007e69a2e0fe",
          "url": "https://github.com/greymistcube/libplanet/commit/d4f6077e3af48c1eea5f1c5a23b3041c0617605a"
        },
        "date": 1695088468713,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330568.4736842105,
            "unit": "ns",
            "range": "± 6925.393878637446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315092,
            "unit": "ns",
            "range": "± 12616.85478934866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290948.9117647059,
            "unit": "ns",
            "range": "± 13793.745344139279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5284493.866666666,
            "unit": "ns",
            "range": "± 53038.5866460403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4823209.3125,
            "unit": "ns",
            "range": "± 91652.95134707428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24598.108695652172,
            "unit": "ns",
            "range": "± 1805.614850419497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103345.22972972973,
            "unit": "ns",
            "range": "± 5184.062321382792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89732.89247311828,
            "unit": "ns",
            "range": "± 5981.173291657251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103102.24742268042,
            "unit": "ns",
            "range": "± 14712.237741949535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6751.25,
            "unit": "ns",
            "range": "± 906.4880380825845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23490.854166666668,
            "unit": "ns",
            "range": "± 2858.8402027438606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4475266.476190476,
            "unit": "ns",
            "range": "± 160769.78441013073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4470857.075,
            "unit": "ns",
            "range": "± 157746.88450796294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5377694.352941177,
            "unit": "ns",
            "range": "± 173016.47168841475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4978092.782608695,
            "unit": "ns",
            "range": "± 125376.57834226548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7638783.266666667,
            "unit": "ns",
            "range": "± 227727.31383236786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1759251.569892473,
            "unit": "ns",
            "range": "± 138929.4407949431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3219144.088235294,
            "unit": "ns",
            "range": "± 100893.22934888408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2106864.488888889,
            "unit": "ns",
            "range": "± 108814.91427543164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5808110.586206896,
            "unit": "ns",
            "range": "± 314813.2384796359"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55530.40476190476,
            "unit": "ns",
            "range": "± 2992.107771877755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10744304.346938776,
            "unit": "ns",
            "range": "± 424291.11249871587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28412870.16129032,
            "unit": "ns",
            "range": "± 1113688.3999296254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68641847.8125,
            "unit": "ns",
            "range": "± 855626.4619370783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135005840.84615386,
            "unit": "ns",
            "range": "± 1427055.0717419684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274136153.3103448,
            "unit": "ns",
            "range": "± 7911144.30679407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6059120.247916667,
            "unit": "ns",
            "range": "± 10998.26437404271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2020707.2826822917,
            "unit": "ns",
            "range": "± 28610.952140589143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396779.9703125,
            "unit": "ns",
            "range": "± 41454.23343317875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3225968.8665865385,
            "unit": "ns",
            "range": "± 112503.29681346605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986083.37890625,
            "unit": "ns",
            "range": "± 983.5868736027588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912706.3600510817,
            "unit": "ns",
            "range": "± 10263.739092548218"
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
          "id": "0fd63b707195acad0f115782cea32403441527ef",
          "message": "Changelog",
          "timestamp": "2023-09-19T10:40:20+09:00",
          "tree_id": "e79f208a94880406de3d65f93e0d362d8e27ac23",
          "url": "https://github.com/greymistcube/libplanet/commit/0fd63b707195acad0f115782cea32403441527ef"
        },
        "date": 1695088519561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295311.9166666667,
            "unit": "ns",
            "range": "± 10935.940891592143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284641.81481481483,
            "unit": "ns",
            "range": "± 7611.755614922916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255153.76470588235,
            "unit": "ns",
            "range": "± 10423.442555294743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4572662.428571428,
            "unit": "ns",
            "range": "± 75341.48949612361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4304830.214285715,
            "unit": "ns",
            "range": "± 38178.40499988396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24691.619565217392,
            "unit": "ns",
            "range": "± 2228.155418269705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98898.68085106384,
            "unit": "ns",
            "range": "± 6413.456431786614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87198.46808510639,
            "unit": "ns",
            "range": "± 5483.54572854417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93183.76404494382,
            "unit": "ns",
            "range": "± 9146.525812150147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6871.309278350515,
            "unit": "ns",
            "range": "± 920.1198445585856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23689.968421052632,
            "unit": "ns",
            "range": "± 2284.423869137638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3739756.4285714286,
            "unit": "ns",
            "range": "± 63416.68067716798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3993962.4,
            "unit": "ns",
            "range": "± 58809.73003290236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4654167.285714285,
            "unit": "ns",
            "range": "± 66147.40614884139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4160955.5714285714,
            "unit": "ns",
            "range": "± 95556.56469681789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6591373.482758621,
            "unit": "ns",
            "range": "± 189374.10929175175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523765.1894736842,
            "unit": "ns",
            "range": "± 87577.17166290744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2903255.095238095,
            "unit": "ns",
            "range": "± 98832.35205844967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1893961.4810126582,
            "unit": "ns",
            "range": "± 92302.91162030684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4899053.138888889,
            "unit": "ns",
            "range": "± 162509.2979203964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52946.734042553195,
            "unit": "ns",
            "range": "± 4400.582070921377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8866733.866666667,
            "unit": "ns",
            "range": "± 138643.79295563078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23295416.8,
            "unit": "ns",
            "range": "± 146201.01589260102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58131229.86666667,
            "unit": "ns",
            "range": "± 232354.24329454574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115999618.07142857,
            "unit": "ns",
            "range": "± 886493.4907777396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230890580.2,
            "unit": "ns",
            "range": "± 614257.5910107373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5173953.274639423,
            "unit": "ns",
            "range": "± 8657.08627074641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588952.3815569195,
            "unit": "ns",
            "range": "± 2994.2916324724565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091333.9403545673,
            "unit": "ns",
            "range": "± 1613.522461067751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608908.811104911,
            "unit": "ns",
            "range": "± 3221.293670714674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831153.3494001116,
            "unit": "ns",
            "range": "± 716.4686684865612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747207.1164899553,
            "unit": "ns",
            "range": "± 258.97292986074837"
          }
        ]
      }
    ]
  }
}