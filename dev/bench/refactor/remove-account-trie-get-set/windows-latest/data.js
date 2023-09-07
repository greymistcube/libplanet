window.BENCHMARK_DATA = {
  "lastUpdate": 1694076549330,
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
        "date": 1694059497356,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373940,
            "unit": "ns",
            "range": "± 25019.443867291924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2556354.054054054,
            "unit": "ns",
            "range": "± 122679.85196938376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1791669,
            "unit": "ns",
            "range": "± 146789.34380102446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4591383.783783784,
            "unit": "ns",
            "range": "± 228938.04212208232"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46959.13978494624,
            "unit": "ns",
            "range": "± 3160.4291315365977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7940338.70967742,
            "unit": "ns",
            "range": "± 241747.3456281983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20542823.076923076,
            "unit": "ns",
            "range": "± 166323.40060780259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53306942.307692304,
            "unit": "ns",
            "range": "± 332922.63981676596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105225103.33333333,
            "unit": "ns",
            "range": "± 1485258.652734873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211145313.33333334,
            "unit": "ns",
            "range": "± 2236472.9655249156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4535969.0625,
            "unit": "ns",
            "range": "± 17858.96330306393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1452072.881610577,
            "unit": "ns",
            "range": "± 1687.7737409050867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1057657.6822916667,
            "unit": "ns",
            "range": "± 3800.8757683940453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664307.9166666665,
            "unit": "ns",
            "range": "± 8409.16467180465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846265.7747395834,
            "unit": "ns",
            "range": "± 3940.213628553298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763736.4322916666,
            "unit": "ns",
            "range": "± 2429.4089045096935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3354431.8181818184,
            "unit": "ns",
            "range": "± 81232.9828999435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3620664.285714286,
            "unit": "ns",
            "range": "± 118687.6158526846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4262513.333333333,
            "unit": "ns",
            "range": "± 67393.34289576877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3933292.1052631577,
            "unit": "ns",
            "range": "± 132519.40731216312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6023223.529411765,
            "unit": "ns",
            "range": "± 123302.55740155882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251421.9512195122,
            "unit": "ns",
            "range": "± 9038.155569448945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244668.6274509804,
            "unit": "ns",
            "range": "± 9659.575357045018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218278.49462365592,
            "unit": "ns",
            "range": "± 12315.992161681545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4229869.230769231,
            "unit": "ns",
            "range": "± 67675.9359572685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3868273.3333333335,
            "unit": "ns",
            "range": "± 71716.21122438741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24063.157894736843,
            "unit": "ns",
            "range": "± 2534.6976248207825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103108.0808080808,
            "unit": "ns",
            "range": "± 13085.59479645755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81291.75257731958,
            "unit": "ns",
            "range": "± 7150.34483584377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87729.47368421052,
            "unit": "ns",
            "range": "± 10019.362888865151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6117.708333333333,
            "unit": "ns",
            "range": "± 978.5052824176776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20776.76767676768,
            "unit": "ns",
            "range": "± 2377.566423580293"
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
        "date": 1694073736096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1351246.4646464647,
            "unit": "ns",
            "range": "± 117272.5547803947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2338397.435897436,
            "unit": "ns",
            "range": "± 73536.19047137155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1829784.6153846155,
            "unit": "ns",
            "range": "± 27877.674644592287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4196577.083333333,
            "unit": "ns",
            "range": "± 162145.1926706607"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45150,
            "unit": "ns",
            "range": "± 2066.7880644192346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7118086.666666667,
            "unit": "ns",
            "range": "± 63869.32940070092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18102913.333333332,
            "unit": "ns",
            "range": "± 99727.63527776662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46316133.333333336,
            "unit": "ns",
            "range": "± 300754.3344608182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93516026.66666667,
            "unit": "ns",
            "range": "± 798905.2236535647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184823957.14285713,
            "unit": "ns",
            "range": "± 823219.3087687329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4322929.036458333,
            "unit": "ns",
            "range": "± 4791.199336204822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1382531.0546875,
            "unit": "ns",
            "range": "± 2434.209415940185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1014583.0915178572,
            "unit": "ns",
            "range": "± 1290.6954658056893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2499305.4361979165,
            "unit": "ns",
            "range": "± 3079.052384931745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797707.7749399039,
            "unit": "ns",
            "range": "± 827.0978856237057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736043.9518229166,
            "unit": "ns",
            "range": "± 1642.4045393773927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3049089.4736842103,
            "unit": "ns",
            "range": "± 104472.79172361728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3178342.8571428573,
            "unit": "ns",
            "range": "± 34328.36266873915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3950017.3913043477,
            "unit": "ns",
            "range": "± 97376.16215748974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3396192.1052631577,
            "unit": "ns",
            "range": "± 115673.59338353283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5634348.780487805,
            "unit": "ns",
            "range": "± 199780.0654744502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253819.60784313726,
            "unit": "ns",
            "range": "± 10270.560249720424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236233.33333333334,
            "unit": "ns",
            "range": "± 9884.342466178545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216253.50877192983,
            "unit": "ns",
            "range": "± 8735.027289847809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3790150,
            "unit": "ns",
            "range": "± 29359.725161153357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3482635.714285714,
            "unit": "ns",
            "range": "± 33237.435038102565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19022.527472527472,
            "unit": "ns",
            "range": "± 1585.7746746247774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82208.0459770115,
            "unit": "ns",
            "range": "± 4500.109001026237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68996.84210526316,
            "unit": "ns",
            "range": "± 4169.378050245367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81061.61616161616,
            "unit": "ns",
            "range": "± 13833.364776323877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4816.326530612245,
            "unit": "ns",
            "range": "± 721.9238154897955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20299.473684210527,
            "unit": "ns",
            "range": "± 2080.6031083589382"
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
        "date": 1694076027046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1396086.6666666667,
            "unit": "ns",
            "range": "± 25459.7123389278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2321439.024390244,
            "unit": "ns",
            "range": "± 82201.81226119283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1629923,
            "unit": "ns",
            "range": "± 133868.34090993955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4170824.5283018867,
            "unit": "ns",
            "range": "± 173247.4218985228"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43113.51351351351,
            "unit": "ns",
            "range": "± 2168.0478135254975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6978450,
            "unit": "ns",
            "range": "± 72142.15134025323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17488092.85714286,
            "unit": "ns",
            "range": "± 177974.56371535326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46560660,
            "unit": "ns",
            "range": "± 405640.5724283507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90949650,
            "unit": "ns",
            "range": "± 994672.9603628134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180596121.42857143,
            "unit": "ns",
            "range": "± 1907801.2145191855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4447534.0625,
            "unit": "ns",
            "range": "± 14939.377700763744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1383586.944110577,
            "unit": "ns",
            "range": "± 1766.9993744293934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 999242.4641927084,
            "unit": "ns",
            "range": "± 1194.6499959858654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2515492.1724759615,
            "unit": "ns",
            "range": "± 2633.1482026999183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812463.1022135416,
            "unit": "ns",
            "range": "± 1196.8759835691387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729367.1274038461,
            "unit": "ns",
            "range": "± 669.2934728038059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2866978.2608695654,
            "unit": "ns",
            "range": "± 69808.0482239544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3072316.129032258,
            "unit": "ns",
            "range": "± 87338.31956544693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3872539.189189189,
            "unit": "ns",
            "range": "± 130365.74998353199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3377040,
            "unit": "ns",
            "range": "± 109730.82895672215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5493652.94117647,
            "unit": "ns",
            "range": "± 106304.17511583834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243279.26829268291,
            "unit": "ns",
            "range": "± 8326.92151705656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234190.9090909091,
            "unit": "ns",
            "range": "± 8016.402318439252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203211.53846153847,
            "unit": "ns",
            "range": "± 8384.384501505161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3764113.3333333335,
            "unit": "ns",
            "range": "± 41516.397219595514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3476946.6666666665,
            "unit": "ns",
            "range": "± 40689.64183156387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17876.288659793816,
            "unit": "ns",
            "range": "± 1956.8135873934339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78773.5294117647,
            "unit": "ns",
            "range": "± 3563.0197509122368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63811.475409836065,
            "unit": "ns",
            "range": "± 2760.6218116368723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73511.61616161616,
            "unit": "ns",
            "range": "± 13405.532722180436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3963.5416666666665,
            "unit": "ns",
            "range": "± 512.8085292965575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16309.34065934066,
            "unit": "ns",
            "range": "± 1327.569041684673"
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
          "id": "0cd7ebc01ea63ac8370f2222972e0ee008b5ad5d",
          "message": "Changelog",
          "timestamp": "2023-09-07T17:27:55+09:00",
          "tree_id": "70b153b18ef978ccdd991c9c4cfc4d233f0bc59d",
          "url": "https://github.com/greymistcube/libplanet/commit/0cd7ebc01ea63ac8370f2222972e0ee008b5ad5d"
        },
        "date": 1694076524653,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1600056.3829787234,
            "unit": "ns",
            "range": "± 210539.95639400466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2810508.163265306,
            "unit": "ns",
            "range": "± 312477.87143869826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1914565.0537634408,
            "unit": "ns",
            "range": "± 224494.01558124117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5321763.917525773,
            "unit": "ns",
            "range": "± 614940.7048287881"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62011.57894736842,
            "unit": "ns",
            "range": "± 14896.735778085926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7484414.43298969,
            "unit": "ns",
            "range": "± 524137.00339814357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20230484.69387755,
            "unit": "ns",
            "range": "± 1837980.865720043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52768229.29292929,
            "unit": "ns",
            "range": "± 4273391.125903349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109377497,
            "unit": "ns",
            "range": "± 9836831.852041816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211324775,
            "unit": "ns",
            "range": "± 13786673.024528543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4735914.453125,
            "unit": "ns",
            "range": "± 76102.69532704954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500511.2816220238,
            "unit": "ns",
            "range": "± 34218.892642536375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176629.9913194445,
            "unit": "ns",
            "range": "± 23919.63255900259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2817131.4453125,
            "unit": "ns",
            "range": "± 91128.99104403907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 969643.8313802084,
            "unit": "ns",
            "range": "± 16235.910094349516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886743.0551382211,
            "unit": "ns",
            "range": "± 20321.25466761164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3476539.898989899,
            "unit": "ns",
            "range": "± 341263.2003860727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3473190.625,
            "unit": "ns",
            "range": "± 320393.53238696116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4551403.0612244895,
            "unit": "ns",
            "range": "± 453174.73484276526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4082242.8571428573,
            "unit": "ns",
            "range": "± 347866.7261685971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7350465.979381443,
            "unit": "ns",
            "range": "± 722264.025173418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335141.23711340205,
            "unit": "ns",
            "range": "± 48973.88069287827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309367.7083333333,
            "unit": "ns",
            "range": "± 45569.270566426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246809.5744680851,
            "unit": "ns",
            "range": "± 32587.788197450922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4298653.535353536,
            "unit": "ns",
            "range": "± 361583.89330920007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3726357.5757575757,
            "unit": "ns",
            "range": "± 337075.8692805018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27737,
            "unit": "ns",
            "range": "± 9848.587603193555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95831.9587628866,
            "unit": "ns",
            "range": "± 19697.06802627272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86854.63917525773,
            "unit": "ns",
            "range": "± 17639.85202022774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109701.05263157895,
            "unit": "ns",
            "range": "± 25566.13241262263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5441.758241758242,
            "unit": "ns",
            "range": "± 895.4286290891247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27777,
            "unit": "ns",
            "range": "± 10543.999729847792"
          }
        ]
      }
    ]
  }
}