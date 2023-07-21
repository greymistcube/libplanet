window.BENCHMARK_DATA = {
  "lastUpdate": 1689906006059,
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
        "date": 1689784467168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484888.4210526317,
            "unit": "ns",
            "range": "± 109947.07611097598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2686994.776119403,
            "unit": "ns",
            "range": "± 126568.41398732662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1817568.4782608696,
            "unit": "ns",
            "range": "± 108309.90125444107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4998125.806451613,
            "unit": "ns",
            "range": "± 227444.9902402877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54145.744680851065,
            "unit": "ns",
            "range": "± 4706.456669908275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8154342.857142857,
            "unit": "ns",
            "range": "± 122514.15437400702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21530113.333333332,
            "unit": "ns",
            "range": "± 250697.0735103756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53242478.571428575,
            "unit": "ns",
            "range": "± 402433.5208904245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107685350,
            "unit": "ns",
            "range": "± 856317.1667086909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212836892.85714287,
            "unit": "ns",
            "range": "± 1328398.1003531953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5146490.572916667,
            "unit": "ns",
            "range": "± 42763.025970573806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568883.9317908655,
            "unit": "ns",
            "range": "± 4004.479539395947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1219968.4291294643,
            "unit": "ns",
            "range": "± 5342.326428038578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2724548.2979910714,
            "unit": "ns",
            "range": "± 9297.743641568137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862739.2299107143,
            "unit": "ns",
            "range": "± 2022.4993077136025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785086.3411458334,
            "unit": "ns",
            "range": "± 2290.4005441012537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3505914.6341463416,
            "unit": "ns",
            "range": "± 110794.82966496138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3866783.7209302327,
            "unit": "ns",
            "range": "± 142405.6980036974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4363846.153846154,
            "unit": "ns",
            "range": "± 113281.709841507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4245315.384615385,
            "unit": "ns",
            "range": "± 48690.99585059929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6545792,
            "unit": "ns",
            "range": "± 173983.29163073868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300729.6296296296,
            "unit": "ns",
            "range": "± 7651.93865906969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273005.45454545453,
            "unit": "ns",
            "range": "± 10927.800398470938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267611.1111111111,
            "unit": "ns",
            "range": "± 15806.585355147683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4268420,
            "unit": "ns",
            "range": "± 75742.98836007387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3944414.285714286,
            "unit": "ns",
            "range": "± 69024.49796037142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23975,
            "unit": "ns",
            "range": "± 3438.1451547692336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94905.10204081633,
            "unit": "ns",
            "range": "± 8330.658473856492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83074.46808510639,
            "unit": "ns",
            "range": "± 7923.219397946945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113793.87755102041,
            "unit": "ns",
            "range": "± 15536.261649660362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7951.0204081632655,
            "unit": "ns",
            "range": "± 1188.6269387739844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28692.708333333332,
            "unit": "ns",
            "range": "± 2752.0421046223173"
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
        "date": 1689823733966,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1321854,
            "unit": "ns",
            "range": "± 104779.39443893489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2400074.1379310344,
            "unit": "ns",
            "range": "± 104905.27985031005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1696416.3265306123,
            "unit": "ns",
            "range": "± 118206.66416216089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4618753.03030303,
            "unit": "ns",
            "range": "± 202170.13567761873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43162.67605633803,
            "unit": "ns",
            "range": "± 2131.3261852300047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6751050,
            "unit": "ns",
            "range": "± 14582.009463719327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17499013.333333332,
            "unit": "ns",
            "range": "± 85496.5401694851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44725840,
            "unit": "ns",
            "range": "± 370726.14420890255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89782835.71428572,
            "unit": "ns",
            "range": "± 747815.1096639852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179461680,
            "unit": "ns",
            "range": "± 791527.2580813084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4909766.462053572,
            "unit": "ns",
            "range": "± 4270.627981766924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525452.4972098214,
            "unit": "ns",
            "range": "± 1191.4617494229967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161189.2578125,
            "unit": "ns",
            "range": "± 2045.8654094486153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2536017.1354166665,
            "unit": "ns",
            "range": "± 2321.8919544350306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810422.7864583334,
            "unit": "ns",
            "range": "± 662.5584637396031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744552.8580729166,
            "unit": "ns",
            "range": "± 766.2045714377819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2972837.5,
            "unit": "ns",
            "range": "± 57004.16212874284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3099728.2608695654,
            "unit": "ns",
            "range": "± 42685.807270010606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3876848,
            "unit": "ns",
            "range": "± 99948.89577512433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3436897.8260869565,
            "unit": "ns",
            "range": "± 132006.2026979211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5924316.666666667,
            "unit": "ns",
            "range": "± 213711.8871075189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253932.5,
            "unit": "ns",
            "range": "± 9033.666021880143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242043.24324324325,
            "unit": "ns",
            "range": "± 6162.906084909246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216767.85714285713,
            "unit": "ns",
            "range": "± 9211.082398993018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3833346.6666666665,
            "unit": "ns",
            "range": "± 28306.482515158117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3573526.6666666665,
            "unit": "ns",
            "range": "± 27434.55763049502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17682.022471910113,
            "unit": "ns",
            "range": "± 1357.0155922726508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82214.54545454546,
            "unit": "ns",
            "range": "± 3453.630305861108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67818.42105263157,
            "unit": "ns",
            "range": "± 2347.955437575872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76170.68965517242,
            "unit": "ns",
            "range": "± 2155.450750326736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4147.959183673469,
            "unit": "ns",
            "range": "± 624.6202296648288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16839.36170212766,
            "unit": "ns",
            "range": "± 1166.0260685319156"
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
        "date": 1689824966854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1275400,
            "unit": "ns",
            "range": "± 50861.53233729902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2477824.025974026,
            "unit": "ns",
            "range": "± 126885.5725722957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1848655.1724137932,
            "unit": "ns",
            "range": "± 53716.25576122116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4653987.755102041,
            "unit": "ns",
            "range": "± 185790.49427676716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43360.9375,
            "unit": "ns",
            "range": "± 1997.825578885903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6851153.333333333,
            "unit": "ns",
            "range": "± 24828.119618882214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17661133.333333332,
            "unit": "ns",
            "range": "± 215214.53637397886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45121192.307692304,
            "unit": "ns",
            "range": "± 134754.8481597753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90987766.66666667,
            "unit": "ns",
            "range": "± 653187.9205280893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180647926.66666666,
            "unit": "ns",
            "range": "± 965814.5307508704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4925145.8984375,
            "unit": "ns",
            "range": "± 4541.001509020093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525974.39453125,
            "unit": "ns",
            "range": "± 2610.4394999734745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172828.111049107,
            "unit": "ns",
            "range": "± 2950.146557788645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2526877.253605769,
            "unit": "ns",
            "range": "± 6304.144349235596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815112.2628348215,
            "unit": "ns",
            "range": "± 2081.2297368760296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745934.2075892857,
            "unit": "ns",
            "range": "± 1576.9924804691748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3008191.6666666665,
            "unit": "ns",
            "range": "± 78065.4124640894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3132156.862745098,
            "unit": "ns",
            "range": "± 126801.09030272882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3958104.1666666665,
            "unit": "ns",
            "range": "± 101032.86369840977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3528970.588235294,
            "unit": "ns",
            "range": "± 70780.90106718303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5958122.916666667,
            "unit": "ns",
            "range": "± 234817.3389150423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251613.33333333334,
            "unit": "ns",
            "range": "± 10917.72725257331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237587.03703703705,
            "unit": "ns",
            "range": "± 9775.847138822357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214445.94594594595,
            "unit": "ns",
            "range": "± 10737.684110264778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3885206.6666666665,
            "unit": "ns",
            "range": "± 53410.02402795441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3513564.285714286,
            "unit": "ns",
            "range": "± 25339.892755005196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17723.711340206184,
            "unit": "ns",
            "range": "± 1792.389768569947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79650,
            "unit": "ns",
            "range": "± 3326.095171655359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65577.02702702703,
            "unit": "ns",
            "range": "± 2199.576808874411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84871.875,
            "unit": "ns",
            "range": "± 11535.735809123522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4137.113402061856,
            "unit": "ns",
            "range": "± 676.4366790439543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16556.122448979593,
            "unit": "ns",
            "range": "± 2144.2354428411563"
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
        "date": 1689826481213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1491371,
            "unit": "ns",
            "range": "± 139043.5679812975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2719074.074074074,
            "unit": "ns",
            "range": "± 114237.96280288309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1902921,
            "unit": "ns",
            "range": "± 150413.06848378258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5088934.848484849,
            "unit": "ns",
            "range": "± 238216.4726542286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54403.125,
            "unit": "ns",
            "range": "± 4644.350345482019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7927557.142857143,
            "unit": "ns",
            "range": "± 188214.01268616683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21009313.333333332,
            "unit": "ns",
            "range": "± 181801.97180553613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53370415.384615384,
            "unit": "ns",
            "range": "± 253782.23882610412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106577633.33333333,
            "unit": "ns",
            "range": "± 1141591.4803883384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214256886.66666666,
            "unit": "ns",
            "range": "± 1362012.5003971497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4974797.395833333,
            "unit": "ns",
            "range": "± 22707.43366317462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1592950.5078125,
            "unit": "ns",
            "range": "± 4999.794403644805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224108.4830729167,
            "unit": "ns",
            "range": "± 4559.052488620849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2711809.296875,
            "unit": "ns",
            "range": "± 8376.73037770501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862682.4544270834,
            "unit": "ns",
            "range": "± 2403.7343433235715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786892.4869791666,
            "unit": "ns",
            "range": "± 2563.8783907180505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3559045.8333333335,
            "unit": "ns",
            "range": "± 86363.51372902327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3690909.302325581,
            "unit": "ns",
            "range": "± 135156.0329572445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4415516.666666667,
            "unit": "ns",
            "range": "± 141248.34360596436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4099641.304347826,
            "unit": "ns",
            "range": "± 157379.76514870286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6485797.05882353,
            "unit": "ns",
            "range": "± 176783.44136994984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276808.5714285714,
            "unit": "ns",
            "range": "± 8888.140526387211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270062.7450980392,
            "unit": "ns",
            "range": "± 10991.141174315135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258824.05063291139,
            "unit": "ns",
            "range": "± 13325.66653155571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4350128.571428572,
            "unit": "ns",
            "range": "± 44184.306795885874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3953433.3333333335,
            "unit": "ns",
            "range": "± 35558.10439096533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25166.315789473683,
            "unit": "ns",
            "range": "± 1893.1348833218851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105054.16666666667,
            "unit": "ns",
            "range": "± 6577.792249470409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94167.70833333333,
            "unit": "ns",
            "range": "± 8474.189851564035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114336.73469387754,
            "unit": "ns",
            "range": "± 17814.753458138228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6886.170212765957,
            "unit": "ns",
            "range": "± 1090.0923373959736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23509.375,
            "unit": "ns",
            "range": "± 1888.5292592803255"
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
          "id": "50c7bf0f779840a1b7f19a41e4de6df58e355c3f",
          "message": "Added tests",
          "timestamp": "2023-07-20T14:18:57+09:00",
          "tree_id": "2685be5ffad386f4a3f05ce76a8fa78fda3ff178",
          "url": "https://github.com/greymistcube/libplanet/commit/50c7bf0f779840a1b7f19a41e4de6df58e355c3f"
        },
        "date": 1689831294012,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1426907,
            "unit": "ns",
            "range": "± 131389.9987391996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2593830.64516129,
            "unit": "ns",
            "range": "± 115587.27819939422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1815808,
            "unit": "ns",
            "range": "± 112354.32694755634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4965637.5,
            "unit": "ns",
            "range": "± 256860.94961420054"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48632.97872340425,
            "unit": "ns",
            "range": "± 2960.0344482837213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7342425,
            "unit": "ns",
            "range": "± 63534.27314163878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20485135.714285713,
            "unit": "ns",
            "range": "± 310603.1195225554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52411766.666666664,
            "unit": "ns",
            "range": "± 822781.466964924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102705606.25,
            "unit": "ns",
            "range": "± 1010893.8958293298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204967506.66666666,
            "unit": "ns",
            "range": "± 2991379.5347074675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4885825.78125,
            "unit": "ns",
            "range": "± 28542.245321263938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1570316.615513393,
            "unit": "ns",
            "range": "± 8602.51160097811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236576.8179086538,
            "unit": "ns",
            "range": "± 5635.802107824891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2725871.6666666665,
            "unit": "ns",
            "range": "± 10214.994549627236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849951.2109375,
            "unit": "ns",
            "range": "± 4015.0922104895294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777351.9391741072,
            "unit": "ns",
            "range": "± 1860.9095855029125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3261984.090909091,
            "unit": "ns",
            "range": "± 121442.38167376409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3406611.111111111,
            "unit": "ns",
            "range": "± 141645.11682192527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4252597.5,
            "unit": "ns",
            "range": "± 148622.28926168717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3817728,
            "unit": "ns",
            "range": "± 146858.33245766105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6203066.666666667,
            "unit": "ns",
            "range": "± 179615.30187226995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266724.1379310345,
            "unit": "ns",
            "range": "± 7697.571749418022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252659.3023255814,
            "unit": "ns",
            "range": "± 9199.710501487802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231976.7676767677,
            "unit": "ns",
            "range": "± 14696.222118201533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4193733.3333333335,
            "unit": "ns",
            "range": "± 41884.37599369188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3813393.3333333335,
            "unit": "ns",
            "range": "± 62009.63596394476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20835.955056179777,
            "unit": "ns",
            "range": "± 1710.0802208064576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89315.9574468085,
            "unit": "ns",
            "range": "± 5629.727226369946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76004.83870967742,
            "unit": "ns",
            "range": "± 3479.0910542443266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91872.46376811594,
            "unit": "ns",
            "range": "± 4385.433242329958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5285.416666666667,
            "unit": "ns",
            "range": "± 844.0477869567969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19720.212765957447,
            "unit": "ns",
            "range": "± 1978.3549040268003"
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
          "id": "a850c52d735b3f00eb7a961cbd370dddcba0396a",
          "message": "Added tests",
          "timestamp": "2023-07-21T11:02:38+09:00",
          "tree_id": "dba981747d10ddc484e6b5abb9b05011f45a7def",
          "url": "https://github.com/greymistcube/libplanet/commit/a850c52d735b3f00eb7a961cbd370dddcba0396a"
        },
        "date": 1689905981790,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439256.5656565656,
            "unit": "ns",
            "range": "± 119573.13376631546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2624274.193548387,
            "unit": "ns",
            "range": "± 113338.55121697085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1848962.6262626264,
            "unit": "ns",
            "range": "± 126168.79330990394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5217406.315789473,
            "unit": "ns",
            "range": "± 320693.8043210365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52045.833333333336,
            "unit": "ns",
            "range": "± 4665.143235047427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7161542.857142857,
            "unit": "ns",
            "range": "± 65947.51659505417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20409493.333333332,
            "unit": "ns",
            "range": "± 280979.7106723612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52167080,
            "unit": "ns",
            "range": "± 663202.5947734867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104603587.5,
            "unit": "ns",
            "range": "± 2039695.2517063261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206528615.3846154,
            "unit": "ns",
            "range": "± 3270562.6559370877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5052251.197916667,
            "unit": "ns",
            "range": "± 74132.66820676519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1591639.4270833333,
            "unit": "ns",
            "range": "± 13931.592933492224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1221830.482700893,
            "unit": "ns",
            "range": "± 9819.003801258765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2706801.9270833335,
            "unit": "ns",
            "range": "± 26990.320119688902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866687.96875,
            "unit": "ns",
            "range": "± 15608.246517586358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796389.2122395834,
            "unit": "ns",
            "range": "± 8691.179932132134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3274187.0967741935,
            "unit": "ns",
            "range": "± 98278.74555547092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3446903.125,
            "unit": "ns",
            "range": "± 100647.9251084146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4195507.894736842,
            "unit": "ns",
            "range": "± 143127.1545459528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3939602.1052631577,
            "unit": "ns",
            "range": "± 224942.88872291576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6506858.823529412,
            "unit": "ns",
            "range": "± 189496.8795100028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281320.6896551724,
            "unit": "ns",
            "range": "± 12212.874406560375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263760,
            "unit": "ns",
            "range": "± 11732.689376268341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260661.45833333334,
            "unit": "ns",
            "range": "± 21253.875781739524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4229323.333333333,
            "unit": "ns",
            "range": "± 63916.41267721312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3958500,
            "unit": "ns",
            "range": "± 46185.22491013766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24550,
            "unit": "ns",
            "range": "± 3180.2629081490186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93972.72727272728,
            "unit": "ns",
            "range": "± 7300.123261215695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84088.04347826086,
            "unit": "ns",
            "range": "± 8235.421249876903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106715.46391752578,
            "unit": "ns",
            "range": "± 19223.620129317176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5806.451612903225,
            "unit": "ns",
            "range": "± 1043.489802413965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22154.736842105263,
            "unit": "ns",
            "range": "± 2141.62239261836"
          }
        ]
      }
    ]
  }
}