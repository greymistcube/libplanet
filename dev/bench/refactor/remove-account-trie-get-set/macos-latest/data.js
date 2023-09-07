window.BENCHMARK_DATA = {
  "lastUpdate": 1694076188570,
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
          "id": "700d014b7cabf220e7891ba1c4c5dfa924e3d8b1",
          "message": "Remove trie mutation from Account",
          "timestamp": "2023-09-07T12:47:30+09:00",
          "tree_id": "4a7a764a6352819fe691068027abef975c3a4ed5",
          "url": "https://github.com/greymistcube/libplanet/commit/700d014b7cabf220e7891ba1c4c5dfa924e3d8b1"
        },
        "date": 1694059342929,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7510717.105263158,
            "unit": "ns",
            "range": "± 136017.59303973013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19470121.44117647,
            "unit": "ns",
            "range": "± 386162.4783788345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45771172.21428572,
            "unit": "ns",
            "range": "± 588210.1544464135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91596904.92307693,
            "unit": "ns",
            "range": "± 781069.6928119861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195123691.57142857,
            "unit": "ns",
            "range": "± 1932517.5528842586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51920.6404494382,
            "unit": "ns",
            "range": "± 4150.078285809227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285083.1081081081,
            "unit": "ns",
            "range": "± 13249.74014174501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278023.84146341466,
            "unit": "ns",
            "range": "± 14127.308989006086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262524.3333333333,
            "unit": "ns",
            "range": "± 11372.062026131869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3841724.5833333335,
            "unit": "ns",
            "range": "± 97641.23197792348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3506587.4,
            "unit": "ns",
            "range": "± 91961.8870950533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17126.494382022473,
            "unit": "ns",
            "range": "± 1662.8115711020316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80175.42857142857,
            "unit": "ns",
            "range": "± 6838.446575576234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74858.97916666667,
            "unit": "ns",
            "range": "± 6946.320299613642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83177.54166666667,
            "unit": "ns",
            "range": "± 11584.133459100234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4705.933333333333,
            "unit": "ns",
            "range": "± 402.7834838116636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16808.64606741573,
            "unit": "ns",
            "range": "± 1895.6188576351153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1406960.1515151516,
            "unit": "ns",
            "range": "± 136801.55882028714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2696935.202898551,
            "unit": "ns",
            "range": "± 116652.0546239441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1811511.5102040817,
            "unit": "ns",
            "range": "± 150536.27652045942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5166424.296296297,
            "unit": "ns",
            "range": "± 191956.02393459415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3177513.0625,
            "unit": "ns",
            "range": "± 61393.3141701589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3245982.6153846155,
            "unit": "ns",
            "range": "± 166331.14307560434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4109033.0714285714,
            "unit": "ns",
            "range": "± 142214.70876989822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3551132.5701754387,
            "unit": "ns",
            "range": "± 153298.11129542656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6388327.1034482755,
            "unit": "ns",
            "range": "± 171903.64041132896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4860346.785714285,
            "unit": "ns",
            "range": "± 25781.163428486045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566895.044140625,
            "unit": "ns",
            "range": "± 7410.688659982313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 967113.2454618566,
            "unit": "ns",
            "range": "± 19477.28116622346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2314319.8309895834,
            "unit": "ns",
            "range": "± 34537.45771837945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800021.4888392857,
            "unit": "ns",
            "range": "± 3473.645730758192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 694171.6845005581,
            "unit": "ns",
            "range": "± 7705.482951051598"
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
          "id": "3787a062904e21e3fbfdca5f536883fbc3f50491",
          "message": "Fix missing cache",
          "timestamp": "2023-09-07T16:48:07+09:00",
          "tree_id": "7b0626d9210cc030c78b78a4a1ed5e1e8cf4259a",
          "url": "https://github.com/greymistcube/libplanet/commit/3787a062904e21e3fbfdca5f536883fbc3f50491"
        },
        "date": 1694073864748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8683691.489361702,
            "unit": "ns",
            "range": "± 579834.9905433654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20673741.375,
            "unit": "ns",
            "range": "± 516782.42278779036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50446042.56,
            "unit": "ns",
            "range": "± 1110397.84263896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98390043,
            "unit": "ns",
            "range": "± 1662866.4324274515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211909764.04347825,
            "unit": "ns",
            "range": "± 8078744.166004562"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62445.217391304344,
            "unit": "ns",
            "range": "± 10088.796003952331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302878.94623655913,
            "unit": "ns",
            "range": "± 19606.581041537618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280811.4791666667,
            "unit": "ns",
            "range": "± 17919.411951100556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275548.62,
            "unit": "ns",
            "range": "± 23256.407112306355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4059608.712121212,
            "unit": "ns",
            "range": "± 190988.04029312453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3585289.180327869,
            "unit": "ns",
            "range": "± 152091.55272395507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17606.696629213482,
            "unit": "ns",
            "range": "± 1524.9356573944535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89357.25773195876,
            "unit": "ns",
            "range": "± 9565.797515626475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93667.45161290323,
            "unit": "ns",
            "range": "± 14391.865865009913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90764.5,
            "unit": "ns",
            "range": "± 18720.483681429458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5889.979381443299,
            "unit": "ns",
            "range": "± 1212.1660792717776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19611.41052631579,
            "unit": "ns",
            "range": "± 4570.118978605635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488275.7291666667,
            "unit": "ns",
            "range": "± 161459.9371490603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2871371.301075269,
            "unit": "ns",
            "range": "± 316014.21774216264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1815718.9789473685,
            "unit": "ns",
            "range": "± 151127.67854578412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5470445.684210527,
            "unit": "ns",
            "range": "± 275403.924737888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3397212.1914893617,
            "unit": "ns",
            "range": "± 220453.09583094268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3687350.836734694,
            "unit": "ns",
            "range": "± 223693.85474674444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4373661.791666667,
            "unit": "ns",
            "range": "± 171976.40998929692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3950720.5444444446,
            "unit": "ns",
            "range": "± 290900.5249533953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7080121.52247191,
            "unit": "ns",
            "range": "± 871516.3859193925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5461921.520996094,
            "unit": "ns",
            "range": "± 152672.522640581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1645476.1946149555,
            "unit": "ns",
            "range": "± 20906.38710871142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1011882.6662760417,
            "unit": "ns",
            "range": "± 12863.089759489585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2524982.1059570312,
            "unit": "ns",
            "range": "± 98337.52269139154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893009.430859375,
            "unit": "ns",
            "range": "± 9430.899557919422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733018.1428385417,
            "unit": "ns",
            "range": "± 10136.854806343716"
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
          "id": "6b2bab45b54bffcbce6bb538e366f3fbff284ea0",
          "message": "Fix missing cache",
          "timestamp": "2023-09-07T17:25:06+09:00",
          "tree_id": "06efea84a2ad5989f267adf4b006096d1670cc71",
          "url": "https://github.com/greymistcube/libplanet/commit/6b2bab45b54bffcbce6bb538e366f3fbff284ea0"
        },
        "date": 1694076173430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8689902.32,
            "unit": "ns",
            "range": "± 227872.29582647092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20312639.02631579,
            "unit": "ns",
            "range": "± 447042.17425644514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52179077.38888889,
            "unit": "ns",
            "range": "± 1020659.7083730808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106069065.88095239,
            "unit": "ns",
            "range": "± 3862521.473428522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217284853.7173913,
            "unit": "ns",
            "range": "± 5289296.779501101"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66158.10638297872,
            "unit": "ns",
            "range": "± 11501.754357271442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321123.2921348315,
            "unit": "ns",
            "range": "± 26795.58086666287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320617.72222222225,
            "unit": "ns",
            "range": "± 30014.077531519106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318732.6489361702,
            "unit": "ns",
            "range": "± 32388.840187020825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4387538.27368421,
            "unit": "ns",
            "range": "± 255933.53219842567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3780586.2555555557,
            "unit": "ns",
            "range": "± 137811.72266128418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22854.043478260868,
            "unit": "ns",
            "range": "± 4004.1827304392846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106059.29591836735,
            "unit": "ns",
            "range": "± 18814.653493667833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96336.92424242424,
            "unit": "ns",
            "range": "± 12808.866112325788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94088.15625,
            "unit": "ns",
            "range": "± 13310.341348644453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6407.670212765957,
            "unit": "ns",
            "range": "± 685.0770993154026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19736.184782608696,
            "unit": "ns",
            "range": "± 4392.466780298927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634774.6717171718,
            "unit": "ns",
            "range": "± 253900.48207612883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3015767.87628866,
            "unit": "ns",
            "range": "± 280044.2789724383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2029668.237113402,
            "unit": "ns",
            "range": "± 250723.40488020747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5722866.134020618,
            "unit": "ns",
            "range": "± 487497.2470029452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3477030.75,
            "unit": "ns",
            "range": "± 291059.799335601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3555675.2395833335,
            "unit": "ns",
            "range": "± 208134.55525479285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4655751.389473684,
            "unit": "ns",
            "range": "± 323608.3504296742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4212377.44949495,
            "unit": "ns",
            "range": "± 466604.88108914136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7169459.418367347,
            "unit": "ns",
            "range": "± 511584.8780465169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6291954.516927083,
            "unit": "ns",
            "range": "± 60363.59769336392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1879752.8341145834,
            "unit": "ns",
            "range": "± 23199.96443483063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1097248.0240513394,
            "unit": "ns",
            "range": "± 34854.43586376096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2751713.225080819,
            "unit": "ns",
            "range": "± 78910.30375599004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844302.7524739583,
            "unit": "ns",
            "range": "± 10360.442058571589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772630.0864955357,
            "unit": "ns",
            "range": "± 11146.602716447102"
          }
        ]
      }
    ]
  }
}