window.BENCHMARK_DATA = {
  "lastUpdate": 1689826663945,
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
          "id": "032a859e1d95812aacd99ccb608d965bfce3d5b2",
          "message": "Use KeyBytes instead of strings",
          "timestamp": "2023-07-20T00:50:49+09:00",
          "tree_id": "0074298ada438a2572c19c5e026f603c1ccc74bc",
          "url": "https://github.com/greymistcube/libplanet/commit/032a859e1d95812aacd99ccb608d965bfce3d5b2"
        },
        "date": 1689784546291,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9303946.5,
            "unit": "ns",
            "range": "± 664543.939231616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22768568.64285714,
            "unit": "ns",
            "range": "± 1097881.815395793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56005225.948979594,
            "unit": "ns",
            "range": "± 2233098.5700670965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104206151,
            "unit": "ns",
            "range": "± 3541057.413455324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216177113.83333334,
            "unit": "ns",
            "range": "± 1485574.6746752942"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68099.2947368421,
            "unit": "ns",
            "range": "± 11552.380914103658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311641.52173913043,
            "unit": "ns",
            "range": "± 22013.952784729812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299490.8404255319,
            "unit": "ns",
            "range": "± 20604.305400019504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309990.3253012048,
            "unit": "ns",
            "range": "± 21277.451597079464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4368301.006666667,
            "unit": "ns",
            "range": "± 219441.89112661764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3853235.407407407,
            "unit": "ns",
            "range": "± 154672.48507679344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21441.335051546394,
            "unit": "ns",
            "range": "± 4102.122546825638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88636.45161290323,
            "unit": "ns",
            "range": "± 11326.632537592759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106096.57291666667,
            "unit": "ns",
            "range": "± 10867.539643354896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115121.74731182796,
            "unit": "ns",
            "range": "± 11069.770850752606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6739.552083333333,
            "unit": "ns",
            "range": "± 1071.684594898603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22448.211764705884,
            "unit": "ns",
            "range": "± 3570.9942029467074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1566933.4444444445,
            "unit": "ns",
            "range": "± 158752.55723617476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2813982.7333333334,
            "unit": "ns",
            "range": "± 123932.13811207074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2095297.2234042552,
            "unit": "ns",
            "range": "± 189228.9582011727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5796869.830769231,
            "unit": "ns",
            "range": "± 269860.9103529405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3399817.159574468,
            "unit": "ns",
            "range": "± 199629.06401217607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3826806.4278350514,
            "unit": "ns",
            "range": "± 441013.9447184288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4657690.236263736,
            "unit": "ns",
            "range": "± 425234.90502011124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4130388.0104166665,
            "unit": "ns",
            "range": "± 290607.517707139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7751929.4845360825,
            "unit": "ns",
            "range": "± 533329.8344516958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6407306.070772059,
            "unit": "ns",
            "range": "± 115487.6386286233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2169332.017708333,
            "unit": "ns",
            "range": "± 38021.927060439564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359468.337890625,
            "unit": "ns",
            "range": "± 20187.658925408094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2954061.213623047,
            "unit": "ns",
            "range": "± 57361.0560135969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882309.2051478794,
            "unit": "ns",
            "range": "± 8458.391790917356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805117.3481001421,
            "unit": "ns",
            "range": "± 19212.070882558564"
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
          "id": "8b60cd32ce822883bd543daa20bc7de6137d9b6e",
          "message": "Use KeyBytes instead of strings",
          "timestamp": "2023-07-20T12:13:29+09:00",
          "tree_id": "a012fd5e7c0f05bc58c4fefefa3234c3785eb83a",
          "url": "https://github.com/greymistcube/libplanet/commit/8b60cd32ce822883bd543daa20bc7de6137d9b6e"
        },
        "date": 1689823763418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7925200.578947368,
            "unit": "ns",
            "range": "± 173996.57571161687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20189699.5,
            "unit": "ns",
            "range": "± 372561.7438947089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48593375,
            "unit": "ns",
            "range": "± 1073551.9688507998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92139047.86666666,
            "unit": "ns",
            "range": "± 1716269.3952066442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188680091.85714287,
            "unit": "ns",
            "range": "± 1987836.3385596627"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54275.29885057471,
            "unit": "ns",
            "range": "± 4501.539209924427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300270.037037037,
            "unit": "ns",
            "range": "± 14930.179329502747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285043.7840909091,
            "unit": "ns",
            "range": "± 17316.95644560713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281232.8823529412,
            "unit": "ns",
            "range": "± 8651.36199389299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3997531.6923076925,
            "unit": "ns",
            "range": "± 62686.66510030212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3534190.652173913,
            "unit": "ns",
            "range": "± 88373.94765921413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17687.108695652172,
            "unit": "ns",
            "range": "± 1843.1401505119052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82511.90721649484,
            "unit": "ns",
            "range": "± 7092.904291852872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75600.56989247311,
            "unit": "ns",
            "range": "± 6741.2997511411595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93649.5376344086,
            "unit": "ns",
            "range": "± 11956.533008250035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4862.220930232558,
            "unit": "ns",
            "range": "± 936.5407864760841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17461.615384615383,
            "unit": "ns",
            "range": "± 2403.9545880774167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564937.0773195876,
            "unit": "ns",
            "range": "± 156647.452212021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2798280.54,
            "unit": "ns",
            "range": "± 109121.2467927324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2059245.3092783506,
            "unit": "ns",
            "range": "± 195332.83857369586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5805587.950819672,
            "unit": "ns",
            "range": "± 258108.88577597289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3116741.2282608696,
            "unit": "ns",
            "range": "± 180588.45828240368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3213805.720588235,
            "unit": "ns",
            "range": "± 133042.02134034102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4192963.0476190476,
            "unit": "ns",
            "range": "± 84670.64401342192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3810311.6285714284,
            "unit": "ns",
            "range": "± 125007.87932768495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6974052.073170732,
            "unit": "ns",
            "range": "± 248522.23393797086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5969082.522395833,
            "unit": "ns",
            "range": "± 45640.60719091427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919723.95390625,
            "unit": "ns",
            "range": "± 11976.837088976457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1252519.971875,
            "unit": "ns",
            "range": "± 21663.65273613188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2393931.1958333333,
            "unit": "ns",
            "range": "± 23829.20963702356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834756.4393880208,
            "unit": "ns",
            "range": "± 14256.489707457495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732996.8463541666,
            "unit": "ns",
            "range": "± 5542.213439008697"
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
          "id": "564935623500069b7886004298a8bd7d9e61f45e",
          "message": "Added tests",
          "timestamp": "2023-07-20T12:34:10+09:00",
          "tree_id": "be853d6f7bc833b40a9e17c4e2a791f04bc17903",
          "url": "https://github.com/greymistcube/libplanet/commit/564935623500069b7886004298a8bd7d9e61f45e"
        },
        "date": 1689825102412,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9348182.923076924,
            "unit": "ns",
            "range": "± 150284.00684895556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23432884.8,
            "unit": "ns",
            "range": "± 480503.40785401966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58917124.233333334,
            "unit": "ns",
            "range": "± 977029.6710268955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115080331.85714285,
            "unit": "ns",
            "range": "± 1981784.210310569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230575405,
            "unit": "ns",
            "range": "± 3327739.538204408"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 91799.57894736843,
            "unit": "ns",
            "range": "± 12681.836168633576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 395791.57731958764,
            "unit": "ns",
            "range": "± 29077.1896706404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 365605.97826086957,
            "unit": "ns",
            "range": "± 23329.576587151896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 388998.8855421687,
            "unit": "ns",
            "range": "± 20625.13923431574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4865947.531914894,
            "unit": "ns",
            "range": "± 185980.39698228732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4414826.555555556,
            "unit": "ns",
            "range": "± 146374.14823008378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23418.540229885057,
            "unit": "ns",
            "range": "± 2129.8491583481273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116863.64583333333,
            "unit": "ns",
            "range": "± 10219.623145775324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 139383.62105263158,
            "unit": "ns",
            "range": "± 14472.97395527921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 155298.38541666666,
            "unit": "ns",
            "range": "± 19956.93600671722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8155.037634408603,
            "unit": "ns",
            "range": "± 2142.071075015039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18999.217647058824,
            "unit": "ns",
            "range": "± 1749.7345962810957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1947105.2676767677,
            "unit": "ns",
            "range": "± 228129.94811285977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3522384.9285714286,
            "unit": "ns",
            "range": "± 179266.9002788586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2485600.2319587627,
            "unit": "ns",
            "range": "± 265471.67557781766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6887098.071428572,
            "unit": "ns",
            "range": "± 365291.2266714757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4005049.9024390243,
            "unit": "ns",
            "range": "± 134345.53521271274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4141260.222222222,
            "unit": "ns",
            "range": "± 135521.83993514237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5024614.084507043,
            "unit": "ns",
            "range": "± 244990.7833175273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4562606.177966102,
            "unit": "ns",
            "range": "± 202036.11949253382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8453996.136363637,
            "unit": "ns",
            "range": "± 394859.62840007164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6793762.8515625,
            "unit": "ns",
            "range": "± 65248.31844509299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2081517.5919270834,
            "unit": "ns",
            "range": "± 27439.82531254214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410867.1731770833,
            "unit": "ns",
            "range": "± 14995.183663579433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2938955.7075520833,
            "unit": "ns",
            "range": "± 31256.79687191504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999202.6020833333,
            "unit": "ns",
            "range": "± 13050.805498456708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 824464.7672991072,
            "unit": "ns",
            "range": "± 5252.520873546475"
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
          "id": "5153c9d758e7962c00cbbba035f4e6d298fc1abb",
          "message": "Added tests",
          "timestamp": "2023-07-20T12:56:07+09:00",
          "tree_id": "7970b8635c49be8a523de796d2ff83435753f9c6",
          "url": "https://github.com/greymistcube/libplanet/commit/5153c9d758e7962c00cbbba035f4e6d298fc1abb"
        },
        "date": 1689826644769,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9256326.5,
            "unit": "ns",
            "range": "± 126243.16588235578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22573671.852941178,
            "unit": "ns",
            "range": "± 661098.9180354972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55533158.166666664,
            "unit": "ns",
            "range": "± 645114.8214162885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111443270.14285715,
            "unit": "ns",
            "range": "± 1372998.5788492202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229530197.47674417,
            "unit": "ns",
            "range": "± 7150619.751660407"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83012.32417582418,
            "unit": "ns",
            "range": "± 7536.4803435517815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356774.4835164835,
            "unit": "ns",
            "range": "± 31168.503377381407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356309.84444444446,
            "unit": "ns",
            "range": "± 49548.71584661467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340011.6397849462,
            "unit": "ns",
            "range": "± 26670.26910070764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4568010.5,
            "unit": "ns",
            "range": "± 179301.54874092308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4111048.1222222224,
            "unit": "ns",
            "range": "± 283755.7836094955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26946.01020408163,
            "unit": "ns",
            "range": "± 4746.500528593254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130409.15789473684,
            "unit": "ns",
            "range": "± 23608.34939588552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121517.84946236559,
            "unit": "ns",
            "range": "± 10690.06071986887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132439.09375,
            "unit": "ns",
            "range": "± 14520.047839618252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8238.376344086022,
            "unit": "ns",
            "range": "± 1069.2018448761153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25060.113402061856,
            "unit": "ns",
            "range": "± 5518.87109319071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1539849.1020408163,
            "unit": "ns",
            "range": "± 112725.38357190354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3030911.049180328,
            "unit": "ns",
            "range": "± 136168.82908708416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2245152.39010989,
            "unit": "ns",
            "range": "± 202166.83077429174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6108035.632352941,
            "unit": "ns",
            "range": "± 288540.27683123876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3565705.693548387,
            "unit": "ns",
            "range": "± 161703.6618309168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3742457.5,
            "unit": "ns",
            "range": "± 213558.79406987148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4757397.672131147,
            "unit": "ns",
            "range": "± 203299.0614218965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4229921.867346939,
            "unit": "ns",
            "range": "± 247665.53764031807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7622519.912087912,
            "unit": "ns",
            "range": "± 443547.2888542914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7279906.218955592,
            "unit": "ns",
            "range": "± 250274.78698460374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2070318.6463694852,
            "unit": "ns",
            "range": "± 57797.67535720733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352941.6904296875,
            "unit": "ns",
            "range": "± 13344.159052752693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3021294.185006649,
            "unit": "ns",
            "range": "± 172379.21064523637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860562.9567464193,
            "unit": "ns",
            "range": "± 21812.41123936046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 827007.7215757979,
            "unit": "ns",
            "range": "± 48006.87202017871"
          }
        ]
      }
    ]
  }
}